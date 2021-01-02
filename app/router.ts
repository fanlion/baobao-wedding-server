import { Application } from 'egg';
import { ROUTER_PREFIX } from './setting';

export default (app: Application) => {
  const { controller, router } = app;

  router.prefix(ROUTER_PREFIX);

  router.get('/', controller.home.index);

  router.get('/login', controller.login.login);
  router.get('/wxlogin', controller.login.wxLogin);

  router.get('/banner/list', controller.home.getBanner);
  router.get('/photo/gallery', controller.home.getGalerys);
};
