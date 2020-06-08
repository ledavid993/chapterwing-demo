import BaseHttpService from './basehttp.service';
import { pathOr } from 'ramda';

export default class NovelService extends BaseHttpService {
  async getNovels() {
    return await this.get('read/popular');
  }
}

export const novelService = new NovelService();
