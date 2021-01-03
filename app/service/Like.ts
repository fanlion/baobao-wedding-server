/*
 * @Author: fan.li
 * @Date: 2021-01-03 18:50:07
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-03 19:52:13
 *
 * 赞
 */
import { Service } from 'egg';

export default class Like extends Service {
  public async listAllLike() {
    const { app } = this;
    const likes = await app.model.Like.findAll();
    return likes;
  }

  public async addLike(params: { userId: number }) {
    const { app } = this;
    const [, created] = await app.model.Like.findOrCreate({ where: { userId: params.userId } });
    return created;
  }
}
