/*
 * @Author: fan.li
 * @Date: 2020-12-27 20:03:15
 * @Last Modified by: fan.li
 * @Last Modified time: 2020-12-27 21:23:32
 *
 * 轮播图元素
 */
import { Application } from 'egg';

export default function (app: Application) {
  const { STRING, BIGINT, INTEGER } = app.Sequelize;

  const Banner = app.model.define('banner', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    imgUrl: {
      type: STRING(255),
      allowNull: false,
      field: 'img_url',
    },
    redirectUrl: {
      type: STRING(255),
      allowNull: true,
      field: 'redirect_url',
    },
    createTime: {
      type: BIGINT,
      allowNull: false,
      field: 'create_time',
    },
    updateTime: {
      type: BIGINT,
      allowNull: false,
      field: 'update_time',
    },
  });

  return class extends Banner {
    static readonly tableName = 'banner';
  };
}
