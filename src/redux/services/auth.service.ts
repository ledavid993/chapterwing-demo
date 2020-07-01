import BaseHttpService from './basehttp.service';
import { pathOr } from 'ramda';

export default class AuthService extends BaseHttpService {
  async signIn(email: string, password: string) {
    const result = await this.post('auth/signin', {
      email,
      password,
    });

    this.saveToken(pathOr('', ['data', 'accessToken'], result));
  }

  async register(email: string, password: string) {
    const result = await this.post('auth/signup', {
      email,
      password,
    });

    this.saveToken(pathOr('', ['data', 'accessToken'], result));
  }

  async signOut() {
    this.removeToken();
  }
}

export const authService = new AuthService();
