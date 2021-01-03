/*
 * @Author: fan.li
 * @Date: 2021-01-03 18:09:13
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-03 18:37:08
 *
 * 评论
 */
import { Service } from 'egg';
import { CreateOptions } from 'sequelize';

export default class Comment extends Service {
  public async findAllComment() {
    const { app } = this;
    const comments = await app.model.Comment.findAll();
    return comments;
  }

  public async addOneComment(comment: CreateOptions) {
    const { app } = this;
    await app.model.Comment.create(comment);
  }

  public async delOneComment(id: number) {
    const { app } = this;
    const comment = await app.model.Comment.findByPk(id);
    comment?.update({ isDeleted: 1 });
  }

  public async changePublicStatus(id: number, isPublic: 0 | 1) {
    const { app } = this;
    const comment = await app.model.Comment.findByPk(id);
    comment?.update({ isPublic });
  }

  public async findAllPublicComment() {
    const { app } = this;
    const comments = await app.model.Comment.findAll({ where: { isPublic: 0, isDeleted: 0 } });
    return comments;
  }
}
