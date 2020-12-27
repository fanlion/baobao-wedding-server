// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseController from '../../../app/controller/BaseController';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    baseController: ExportBaseController;
    home: ExportHome;
  }
}
