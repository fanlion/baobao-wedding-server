import BaseController from './BaseController';

export default class HomeController extends BaseController {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async getBanner() {
    const { ctx } = this;
    const data = await ctx.service.photoService.findBanner();
    ctx.body = this.success({ data });
  }

  public async getGalerys() {
    const { ctx } = this;
    const data = await ctx.service.photoService.fetchGalleryList();
    ctx.body = this.success({ data });
  }

  public async getGalleryPhotos(id: number) {
    const { ctx } = this;
    const data = await ctx.service.photoService.findGalleryPhotos(id);
    ctx.body = this.success({ data });
  }
}
