import { Context } from 'egg';

export default function (options) {
  return async function jwt(ctx: Context, next: () => Promise<any>) {
    const token = ctx.request.header.token;

    if (token) {
      try {
        const decode = ctx.app.jwt.verify(token, options.JWTScretKey);
        await next();
        console.log('===========>decode', decode);
      } catch (e) {
        ctx.throw(200, ctx.responseStruc(ctx.errorMsg[ctx.errorCode.NO_AUTHORITY]));
      }
    }
  };
}
