// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportComment from '../../../app/service/Comment';
import ExportLike from '../../../app/service/Like';
import ExportLogin from '../../../app/service/Login';
import ExportPhoto from '../../../app/service/Photo';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    comment: AutoInstanceType<typeof ExportComment>;
    like: AutoInstanceType<typeof ExportLike>;
    login: AutoInstanceType<typeof ExportLogin>;
    photo: AutoInstanceType<typeof ExportPhoto>;
    test: AutoInstanceType<typeof ExportTest>;
  }
}
