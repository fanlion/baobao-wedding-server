/*
 * @Author: fan.li
 * @Date: 2020-12-27 15:00:37
 * @Last Modified by: fan.li
 * @Last Modified time: 2020-12-27 17:35:50
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

const deepConversion = (data: any) => {
  let result: any = null;
  if (_.isArray(data)) {
    result = [];
    data.forEach((item, i) => {
      if (_.isPlainObject(item)) {
        result[i] = {};
        for (const [key, value] of Object.entries(item)) {
          if ((_.isArray(value) && value.length) || _.isPlainObject(value)) {
            result[i][_.camelCase(key)] = deepConversion(value);
          } else {
            result[i][_.camelCase(key)] = value;
          }
        }
      } else {
        result[i] = item;
      }
    });
  } else if (_.isPlainObject(data)) {
    result = {};
    for (const [key, value] of Object.entries(data)) {
      if ((_.isArray(value) && value.length) || _.isPlainObject(value)) {
        result[_.camelCase(key)] = deepConversion(value);
      } else {
        result[_.camelCase(key)] = value;
      }
    }
  } else {
    result = data;
  }
  return result;
};

export default class BaseController extends Controller {
  public success(response: ResponseData) {
    const { data } = response;
    response.data = deepConversion(data);

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
