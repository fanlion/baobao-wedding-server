/*
 * @Author: fan.li
 * @Date: 2021-01-03 18:43:45
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-03 18:46:57
 *
 * 赞
 */
import { Application } from 'egg';

export default function (app: Application) {
  const { BIGINT, INTEGER } = app.Sequelize;

  const Like = app.model.define('like', {
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
  });

  return class extends Like {
    static readonly tableName = 'like';

    static associate() {
      app.model.Like.belongsTo(app.model.User, {
        foreignKey: 'user_id',
        targetKey: 'id',
        as: 'like',
      });
    }
  };
}
