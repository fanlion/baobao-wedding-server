import { Service } from 'egg';
import axios from 'axios';

interface WxLoginParams {
  code: string;
  iv: string;
  encryptedData: 'string';
}

export default class Login extends Service {
  public async login() {}

  public async wxLogin(params: WxLoginParams) {
    const { ctx, config } = this;
    const wechatAuthUrl = config.base.wechatAuthUrl;
    const appid = process.env.AppId as string;
    const secret = process.env.AppSecret as string;
    const { code, iv, encryptedData } = params;

    const response = await axios({
      url: wechatAuthUrl,
      method: 'get',
      params: {
        appid,
        secret,
        js_code: code,
      },
    });

    const { openid, session_key: sessionKey } = response.data;
    const userInfo = ctx.helper.wechatDecryptData(encryptedData, iv, sessionKey, appid);
    const [user] = await ctx.model.User.findOrCreate({ where: { openId: openid } });
    await user.update({
      nickName: userInfo.nickName,
      gender: userInfo.gender,
      avatarUrl: userInfo.avatarUrl,
      openId: openid,
      sessionKey,
    });
    const userId = user.get('id') as number;
    const nickName = user.get('nickName') as string;

    const token = ctx.app.jwt.sign(user.get('id'), config.base.JWTScretKey);
    await ctx.app.redis.hset(token, { userId, nickName });

    return { user, token };
  }
}
