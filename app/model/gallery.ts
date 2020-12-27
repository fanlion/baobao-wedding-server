/*
 * @Author: fan.li
 * @Date: 2020-12-27 20:24:22
 * @Last Modified by: fan.li
 * @Last Modified time: 2020-12-27 20:30:53
 */

import { Application } from 'egg';

export default function (app: Application) {
  const { STRING, BIGINT, INTEGER } = app.Sequelize;

  const Gallery = app.model.define('gallery', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    desc: {
      type: STRING(45),
      allowNull: true,
    },
    name: {
      type: STRING(45),
      allowNull: true,
    },
    img_url: {
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

  return class extends Gallery {
    static readonly tableName = 'gallery';
  };
}
