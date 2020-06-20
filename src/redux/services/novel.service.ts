import BaseHttpService from './basehttp.service';
import { pathOr } from 'ramda';

export default class NovelService extends BaseHttpService {
  async getPopularNovels(limit: number, offset: number) {
    const url = `read/popular`;
    return await this.get(url, { params: { limit, offset } });
  }

  async getNovels(
    category: string = 'Novel',
    limit: number = 12,
    removeDefaultImage: boolean = false,
    isPublish: boolean = true
  ) {
    const url = 'read';
    return await this.get(url, { params: { category, limit, removeDefaultImage, isPublish } });
  }

  async getNovel(novelTitle: string) {
    const url = `read/novel/${novelTitle}`;
    return await this.get(url);
  }

  async getChapter(novelTitle: string, volumeTitle: string, chapterNumber: number) {
    const url = `read/novel/${novelTitle}/${volumeTitle}/${chapterNumber}`;
    return await this.get(url);
  }
}

export const novelService = new NovelService();
