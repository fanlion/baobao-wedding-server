/*
 * @Author: fan.li
 * @Date: 2020-12-27 15:45:06
 * @Last Modified by: fan.li
 * @Last Modified time: 2021-01-01 22:05:54
 */
import ErrorCode, { ErrorCodeData, ErrorMessage } from './error';

interface Response extends ErrorCodeData {
  data?: any;
}

export default {
  errorMsg: ErrorMessage,
  errorCode: ErrorCode,

  responseStruc(res: Response = {}): Response {
    return {
      data: null,
      ...ErrorMessage[ErrorCode.OK],
      ...res,
    };
  },
};
