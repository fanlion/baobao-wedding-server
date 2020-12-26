import { Service } from 'egg';

export default class PhotoService extends Service {
  public async findBanner() {
    const banner = await this.app.mysql.select('banner');
    return banner;
  }

  public async findGalleryPhotos(id: number) {
    const photos = await this.app.mysql.get('gallery_photos', { id });
    return photos;
  }

  public async fetchGalleryList() {
    const gallerys = await this.app.mysql.select('gallery');
    return gallerys;
  }
}
