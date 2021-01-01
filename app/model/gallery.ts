/*
 * @Author: fan.li
 * @Date: 2020-12-27 20:24:22
 * @Last Modified by: fan.li
 * @Last Modified time: 2020-12-27 22:35:54
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
    imgUrl: {
      type: STRING(255),
      allowNull: true,
      field: 'img_url',
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

  return class extends Gallery {
    static readonly tableName = 'gallery';
  };
}
