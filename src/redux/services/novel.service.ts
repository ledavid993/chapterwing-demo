import BaseHttpService from './basehttp.service';
import { pathOr } from 'ramda';

export default class NovelService extends BaseHttpService {
  async getNovels() {
    const url = 'read/popular';
    return await this.get(url);
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
