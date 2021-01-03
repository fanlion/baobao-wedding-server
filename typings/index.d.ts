import 'egg';

declare module 'egg' {
  interface Application {
    jwt: any;
  }
}

declare const process: {
  env: {
    AppId: string;
    AppSecret: string;
    [key: string]: any;
  };
};
