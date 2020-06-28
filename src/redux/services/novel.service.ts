import BaseHttpService from './basehttp.service';
import { camelizeKeys } from 'humps';

export default class NovelService extends BaseHttpService {
  async getPopularNovels(limit: number, offset: number) {
    const url = 'read/popular';
    return await this.get(url, { params: { limit, offset } });
  }

  async getNovels(params: { offset: number; limit: number; search?: string }) {
    const url = 'read';
    const res = await this.get(url, { params });

    return camelizeKeys(res);
  }

  async getRecommendedNovels(
    category: string = 'Novel',
    limit: number = 12,
    removeDefaultImage: boolean = false,
    isPublish: boolean = true
  ) {
    const url = 'read/recommended';
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
