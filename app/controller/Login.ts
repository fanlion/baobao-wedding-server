import BaseController from './BaseController';

export default class Login extends BaseController {
  public async login() {
    const { ctx } = this;
    // const data = await ctx.servic
    ctx.body = this.success({
      data: {},
    });
  }

  public async wxLogin() {
    const { ctx } = this;

    // const data = await ctx.service.
    ctx.body = this.success({
      data: {},
    });
  }
}
