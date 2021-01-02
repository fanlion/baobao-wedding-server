import 'egg';

declare module 'egg' {
  interface Application {
    jwt: {
      verify: (token: string, secret: string) => any;
      sign: Function;
    };
  }
}

// declare const process: {
//   env: {
//     AppId: string;
//     AppSecret: string;
//     JWTScretKey: string;
//     [key: string]: any;
//   };
// };
