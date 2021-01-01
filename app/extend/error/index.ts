/*
 * @Author: fan.li
 * @Date: 2020-12-26 23:13:30
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-01 22:03:21
 *
 * 错误码定义
 */

export interface ErrorCodeData {
  [name: number]: {
    code: ErrorCode;
    desc: string;
  };
}

enum ErrorCode {
  OK = 0,
  ERROR = 1,
  NO_TOKEN = 10001,
  NO_AUTHORITY = 10002,
  SERVER_ERROR = 10003,
  PARAMS_ERROR = 10004,
  NO_USER = 10005,
  PASSWORD_ERROR = 10006,
}

const ErrorMessage: ErrorCodeData = {
  [ErrorCode.OK]: { code: ErrorCode.OK, desc: 'success' },
  [ErrorCode.ERROR]: { code: ErrorCode.ERROR, desc: 'error' },
  [ErrorCode.NO_AUTHORITY]: { code: ErrorCode.NO_AUTHORITY, desc: '未授权' },
  [ErrorCode.NO_TOKEN]: { code: ErrorCode.NO_TOKEN, desc: '未登录' },
};

export { ErrorMessage };

export default ErrorCode;
