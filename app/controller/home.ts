import BaseController from './BaseController';

export default class HomeController extends BaseController {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async getBanner() {
    const { ctx } = this;
    const data = await ctx.service.photo.findBanner();
    ctx.body = this.success({ data });
  }

  public async getGalerys() {
    const { ctx } = this;
    const data = await ctx.service.photo.fetchGalleryList();
    ctx.body = this.success({ data });
  }

  public async getGalleryPhotos() {
    const { ctx } = this;
    const { id } = ctx.request.body;

    ctx.validate({
      id: 'number',
    });

    const data = await ctx.service.photo.findGalleryPhotos(id);
    ctx.body = this.success({ data });
  }
}
