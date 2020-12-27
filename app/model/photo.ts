/*
 * @Author: fan.li
 * @Date: 2020-12-27 20:31:32
 * @Last Modified by: fan.li
 * @Last Modified time: 2020-12-27 20:42:09
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
    gallery_id: {
      type: INTEGER,
      allowNull: false,
    },
    img_url: {
      type: STRING,
      allowNull: false,
    },
    desc: {
      type: STRING,
      allowNull: true,
      defaultValue: '',
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

  return class extends Photo {
    static readonly tableName = 'photo';

    static associate() {
      app.model.Photo.belongsTo(app.model.Gallery, {
        foreignKey: 'gallery_id',
        targetKey: 'id',
        as: 'p',
      });
    }
  };
}
