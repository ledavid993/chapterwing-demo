import BaseHttpService from './basehttp.service';
import { pathOr } from 'ramda';

export default class NovelService extends BaseHttpService {
  async getNovels() {
    return await this.get('read/popular');
  }

  async getNovel(novelTitle: string) {
    return await this.get(`read/novel/${novelTitle}`);
  }
}

export const novelService = new NovelService();
