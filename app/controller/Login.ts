import BaseController from './BaseController';

export default class Login extends BaseController {
  public async login() {
    const { ctx } = this;
    ctx.body = this.success({
      data: {},
    });
  }

  public async wxLogin() {
    const { ctx } = this;
    const { code, encryptedData, iv } = ctx.request.body;

    ctx.validate({
      code: 'string',
      iv: 'string',
      encryptedData: 'string',
    });

    const token = await ctx.service.login.wxLogin({ code, encryptedData, iv });
    ctx.body = this.success({
      data: token,
    });
  }
}
