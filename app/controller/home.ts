import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async getBanner() {
    const { ctx } = this;
    ctx.body = await ctx.service.photoService.findBanner();
  }

  public async getGalerys() {
    const { ctx } = this;
    ctx.body = await ctx.service.photoService.fetchGalleryList();
  }

  public async getGalleryPhotos(id: number) {
    const { ctx } = this;
    ctx.body = await ctx.service.photoService.findGalleryPhotos(id);
  }
}
