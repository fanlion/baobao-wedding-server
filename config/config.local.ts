import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    AppId: '',
    AppSecret: '',
  };
  return config;
};
