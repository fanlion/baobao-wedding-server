// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBanner from '../../../app/model/banner';
import ExportComment from '../../../app/model/comment';
import ExportGallery from '../../../app/model/gallery';
import ExportLike from '../../../app/model/like';
import ExportPhoto from '../../../app/model/photo';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Banner: ReturnType<typeof ExportBanner>;
    Comment: ReturnType<typeof ExportComment>;
    Gallery: ReturnType<typeof ExportGallery>;
    Like: ReturnType<typeof ExportLike>;
    Photo: ReturnType<typeof ExportPhoto>;
    User: ReturnType<typeof ExportUser>;
  }
}
