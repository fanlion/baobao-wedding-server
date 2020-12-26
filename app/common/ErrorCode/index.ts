/*
 * @Author: fan.li
 * @Date: 2020-12-26 23:13:30
 * @Last Modified by: fan.li
 * @Last Modified time: 2020-12-26 23:19:55
 *
 * 错误码定义
 */

export interface ErrorCodeData {
  [name: string]: {
    code: number;
    desc: string;
  }
}

export interface ResponseData extends ErrorCodeData {
  data: any
}

const ErrorCode: ErrorCodeData = {
  OK: { code: 0, desc: 'success' },
  ERROR: { code: 1, desc: 'error' },
};

export default ErrorCode;
