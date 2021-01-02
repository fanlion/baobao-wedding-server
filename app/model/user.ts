/*
 * @Author: fan.li
 * @Date: 2021-01-02 15:04:08
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-02 15:12:56
 *
 * 用户信息表
 */
import { Application } from 'egg';

export default function (app: Application) {
  const { STRING, BIGINT, INTEGER } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nickName: {
      type: STRING,
      allowNull: false,
      field: 'nick_name',
    },
    avatarUrl: {
      type: STRING,
      allowNull: false,
      field: 'avatar_url',
    },
    gender: {
      type: INTEGER,
      allowNull: false,
    },
    sessionKey: {
      type: STRING,
      allowNull: false,
      field: 'session_key',
    },
    openId: {
      type: STRING,
      allowNull: false,
      field: 'open_id',
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

  return class extends User {
    static readonly tableName = 'user';
  };
}
