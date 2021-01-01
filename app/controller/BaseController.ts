/*
 * @Author: fan.li
 * @Date: 2020-12-27 15:00:37
 * @Last Modified by: fan.li
 * @Last Modified time: 2020-12-27 22:34:31
 *
 * BaseController
 */
import { Controller } from 'egg';
import * as _ from 'lodash';
import ErrorCode, { ErrorMessage } from '../extend/error';

interface ResponseData {
  data?: any;
  code?: number;
  desc?: string;
}

export default class BaseController extends Controller {
  public success(response: ResponseData) {
    const { data = {} } = response;
    response.data = data.dataValues || data;

    return {
      ...this.ctx.responseStruc(ErrorMessage[ErrorCode.OK]),
      ...response,
    };
  }

  public fail(response: ResponseData) {
    return {
      ...this.ctx.responseStruc(ErrorMessage[ErrorCode.ERROR]),
      ...response,
    };
  }
}
