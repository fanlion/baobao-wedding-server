// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseController from '../../../app/controller/BaseController';
import ExportComment from '../../../app/controller/Comment';
import ExportHome from '../../../app/controller/Home';
import ExportLike from '../../../app/controller/Like';
import ExportLogin from '../../../app/controller/Login';

declare module 'egg' {
  interface IController {
    baseController: ExportBaseController;
    comment: ExportComment;
    home: ExportHome;
    like: ExportLike;
    login: ExportLogin;
  }
}
