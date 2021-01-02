// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBanner from '../../../app/model/banner';
import ExportGallery from '../../../app/model/gallery';
import ExportPhoto from '../../../app/model/photo';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Banner: ReturnType<typeof ExportBanner>;
    Gallery: ReturnType<typeof ExportGallery>;
    Photo: ReturnType<typeof ExportPhoto>;
    User: ReturnType<typeof ExportUser>;
  }
}
