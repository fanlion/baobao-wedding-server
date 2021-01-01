/*
 * @Author: fan.li
 * @Date: 2020-12-27 20:31:32
 * @Last Modified by: fan.li
 * @Last Modified time: 2020-12-27 22:37:02
 */
import { Application } from 'egg';

export default function (app: Application) {
  const { STRING, BIGINT, INTEGER } = app.Sequelize;

  const Photo = app.model.define('photo', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    galleryId: {
      type: INTEGER,
      allowNull: false,
      field: 'gallery_id',
    },
    imgUrl: {
      type: STRING,
      allowNull: false,
      field: 'img_url',
    },
    desc: {
      type: STRING,
      allowNull: true,
      defaultValue: '',
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

  return class extends Photo {
    static readonly tableName = 'photo';

    static associate() {
      app.model.Photo.belongsTo(app.model.Gallery, {
        foreignKey: 'gallery_id',
        targetKey: 'id',
        as: 'photo',
      });
    }
  };
}
