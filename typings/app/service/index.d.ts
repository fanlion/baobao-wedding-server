// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportPhotoService from '../../../app/service/PhotoService';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    photoService: AutoInstanceType<typeof ExportPhotoService>;
    test: AutoInstanceType<typeof ExportTest>;
  }
}
