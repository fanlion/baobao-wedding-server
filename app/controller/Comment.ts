/*
 * @Author: fan.li
 * @Date: 2021-01-03 17:58:12
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-03 18:41:19
 *
 *  评论
 */
import BaseController from './BaseController';

export default class Comment extends BaseController {
  public async listAllComent() {}

  public async listAllPublicComment() {}

  public async delOneComment() {
    const { ctx } = this;
    ctx.validate({
      id: 'number',
    });
  }
}
