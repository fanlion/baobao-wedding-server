/*
 * @Author: fan.li
 * @Date: 2021-01-02 15:04:08
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-02 21:05:23
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
      allowNull: true,
      field: 'nick_name',
    },
    avatarUrl: {
      type: STRING,
      allowNull: true,
      field: 'avatar_url',
    },
    gender: {
      type: INTEGER,
      allowNull: true,
    },
    sessionKey: {
      type: STRING,
      allowNull: true,
      field: 'session_key',
    },
    openId: {
      type: STRING,
      allowNull: true,
      field: 'open_id',
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

  return class extends User {
    static readonly tableName = 'user';
  };
}
