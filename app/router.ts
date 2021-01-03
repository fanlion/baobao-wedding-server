import { Application } from 'egg';
import { ROUTER_PREFIX } from './setting';

export default (app: Application) => {
  const { controller, router } = app;
  const jwt = app.middleware.jwt(app.config.jwt);

  router.prefix(ROUTER_PREFIX);

  router.get('/', controller.home.index);

  router.post('/login', controller.login.login);
  router.post('/wxlogin', controller.login.wxLogin);

  router.post('/photo/banner', jwt, controller.home.getBanner);
  router.post('/photo/gallery', jwt, controller.home.getGalerys);
  router.post('/photo/item', jwt, controller.home.getGalleryPhotos);

  router.post('/comment/like', jwt, controller.like.addLike);
  router.post('/comment/listLike', jwt, controller.like.listAllLike);
};
