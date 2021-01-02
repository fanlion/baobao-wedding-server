import { Application } from 'egg';
import { ROUTER_PREFIX } from './setting';

export default (app: Application) => {
  const { controller, router } = app;
  const jwt = app.middleware.jwt(app.config.jwt);

  router.prefix(ROUTER_PREFIX);

  router.get('/', controller.home.index);

  router.post('/login', controller.login.login);
  router.post('/wxlogin', controller.login.wxLogin);

  router.get('/banner/list', jwt, controller.home.getBanner);
  router.get('/photo/gallery', jwt, controller.home.getGalerys);
};
