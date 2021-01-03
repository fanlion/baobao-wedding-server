import { Service } from 'egg';

export default class Photo extends Service {
  public async findBanner() {
    const { app } = this;
    const banner = await app.model.Banner.findAll();
    return banner;
  }

  public async findGalleryPhotos(id: number) {
    const { app } = this;
    const photos = await app.model.Photo.findAll({ where: { galleryId: id } });
    return photos;
  }

  public async fetchGalleryList() {
    const { app } = this;
    const gallerys = await app.model.Gallery.findAll();
    return gallerys;
  }
}
