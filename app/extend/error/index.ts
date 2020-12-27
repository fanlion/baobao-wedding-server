/*
 * @Author: fan.li
 * @Date: 2020-12-26 23:13:30
 * @Last Modified by: fan.li
 * @Last Modified time: 2020-12-27 15:51:31
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
  ERROR = 10001,
}

const ErrorMessage: ErrorCodeData = {
  [ErrorCode.OK]: { code: ErrorCode.OK, desc: 'success' },
  [ErrorCode.ERROR]: { code: ErrorCode.ERROR, desc: 'error' },
};

export { ErrorMessage };

export default ErrorCode;
