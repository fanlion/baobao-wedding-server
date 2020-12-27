/*
 * @Author: fan.li
 * @Date: 2020-12-27 20:03:15
 * @Last Modified by: fan.li
 * @Last Modified time: 2020-12-27 20:24:13
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
    img_url: {
      type: STRING(255),
      allowNull: false,
    },
    redirect_url: {
      type: STRING(255),
      allowNull: true,
    },
    create_time: {
      type: BIGINT,
      allowNull: false,
    },
    update_time: {
      type: BIGINT,
      allowNull: false,
    },
  });

  return class extends Banner {
    static readonly tableName = 'banner';
  };
}
