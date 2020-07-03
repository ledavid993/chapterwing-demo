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
    removeDefaultImage: boolean = false
  ) {
    const url = 'read/recommended';
    return await this.get(url, { params: { category, limit, removeDefaultImage } });
  }

  async getNovel(novelTitle: string) {
    const url = `read/novel/${novelTitle}`;
    return await this.get(url);
  }

  async getChapter(novelTitle: string, chapterNumber: number) {
    const url = `read/novel/${novelTitle}/${chapterNumber}`;
    return await this.get(url);
  }

  async getReviews(novelId: string, offset: number, limit: number) {
    const url = `review/${novelId}`;
    return await this.get(url, { params: { limit, offset } });
  }

  async postReview(novelId: string, data: { text: string; rating: number }) {
    const url = `review/${novelId}`;
    return await this.post(url, data);
  }
}

export const novelService = new NovelService();
