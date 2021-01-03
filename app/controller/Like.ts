/*
 * @Author: fan.li
 * @Date: 2021-01-03 18:05:00
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-03 20:56:06
 *
 * 点赞
 */
import BaseController from './BaseController';

export default class Like extends BaseController {
  public async listAllLike() {
    const { ctx } = this;
    const likes = await ctx.service.like.listAllLike();
    ctx.body = this.success({ data: likes });
  }

  public async addLike() {
    const { ctx, app } = this;
    const { token } = ctx.request.header;
    const userId = ctx.app.jwt.verify(token, app.config.jwt.secret);
    const created = await ctx.service.like.addLike({ userId });
    ctx.body = this.success({ data: created });
  }
}
