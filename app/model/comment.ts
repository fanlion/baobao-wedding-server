/*
 * @Author: fan.li
 * @Date: 2021-01-03 17:58:27
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-03 18:42:21
 *
 * 评论
 */
import { Application } from 'egg';

export default function (app: Application) {
  const { STRING, BIGINT, INTEGER } = app.Sequelize;

  const Comment = app.model.define('comment', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: INTEGER,
      allowNull: false,
      field: 'user_id',
    },
    content: {
      type: STRING,
      allowNull: false,
    },
    createTime: {
      type: BIGINT,
      allowNull: true,
      field: 'create_time',
    },
    updateTime: {
      type: BIGINT,
      allowNull: true,
      field: 'update_time',
    },
    isDeleted: {
      type: INTEGER,
      allowNull: true,
      field: 'is_deleted',
    },
    isPublic: {
      type: INTEGER,
      allowNull: true,
      field: 'is_public',
    },
  });

  return class extends Comment {
    static readonly tableName = 'comment';

    static associate() {
      app.model.Comment.belongsTo(app.model.User, {
        foreignKey: 'user_id',
        targetKey: 'id',
        as: 'comment',
      });
    }
  };
}
