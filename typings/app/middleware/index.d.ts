// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportErrorHandles from '../../../app/middleware/error_handles';

declare module 'egg' {
  interface IMiddleware {
    errorHandles: typeof ExportErrorHandles;
  }
}
