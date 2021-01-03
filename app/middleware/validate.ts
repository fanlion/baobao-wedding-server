/*
 * @Author: fan.li
 * @Date: 2021-01-01 21:21:39
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-02 22:59:46
 *
 * 校验
 */
import { Context } from 'egg';
import { IGNORE_AUTHO_ROUTES } from '../setting';

export default function () {
  return async function validate(ctx: Context, next: () => Promise<any>) {
    try {
      const token = ctx.request.headers.token;
      const userInfo = await ctx.app.redis.hgetall(token);

      if (IGNORE_AUTHO_ROUTES.some((v) => v.test(ctx.path))) {
        return await next();
      }

      if (!token || JSON.stringify(userInfo) === '{}') {
        ctx.throw(200, ctx.responseStruc(ctx.errorMsg[ctx.errorCode.NO_AUTHORITY]));
      }

      // token续期
      await ctx.app.redis.expire(token, ctx.app.config.base.redis.expire);
      await next();
    } catch (err) {
      ctx.logger.error('[全局拦截]', err);

      if (err.code === 'invalid_param') {
        ctx.throw(200, {
          desc:
            err.erros.length > 1
              ? ctx.errorMsg[ctx.errorCode.PARAMS_ERROR].desc
              : err.errors[0].message,
          code: ctx.errorMsg[ctx.errorCode.PARAMS_ERROR].code,
        });
      }

      ctx.throw(200, {
        desc: err.desc || ctx.errorMsg[ctx.errorCode.ERROR].desc,
        code: err.code || ctx.errorMsg[ctx.errorCode.ERROR].code,
      });
    }
  };
}
