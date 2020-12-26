import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    mysql: {
      client: {
        host: 'localhost',
        port: '3306',
        user: 'random',
        password: 'robot',
        database: 'wedding',
      },
      // 是否加载在app上，默认开启
      app: true,
      // 是否加载到agent上，默认关闭
      agent: false,
    },
  };
  return config;
};
