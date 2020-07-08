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

  async register(email: string, username: string, password: string) {
    const result = await this.post('auth/signup', {
      email,
      username,
      password,
    });

    return result;
  }

  async forgotPassword(email: string) {
    return await this.post('auth/forgotPassword', {
      email,
    });
  }

  async resetPassword(accessToken: string, password: string) {
    return await this.put(`auth/resetPassword/${accessToken}`, { password });
  }

  async signOut() {
    this.removeToken();
  }
}

export const authService = new AuthService();
