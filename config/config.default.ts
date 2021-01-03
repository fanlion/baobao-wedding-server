import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1608302381111_6826';

  // add your egg config in here
  config.middleware = ['errorHandler', 'validate'];

  config.sequelize = {
    dialect: 'mysql',
    username: 'random',
    password: 'robot',
    database: 'wedding',
    host: '127.0.0.1',
    timezone: '+08:00',
    define: {
      timestamps: false,
      freezeTableName: true,
      underscored: false,
    },
  };

  config.validate = {
    validateRoot: true,
  };

  config.multipart = {
    mode: 'file',
  };

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0,
    },
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
      domainWhiteList: ['http://localhost:7001'],
    },
  };

  config.jwt = {
    secret: '12345677',
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  config.base = {
    redis: {
      expire: 60 * 60 * 12,
      mode: 'EX',
    },
    wechatAuthUrl: 'https://api.weixin.qq.com/sns/jscode2session',
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
  };
};
