import BaseHttpService from './basehttp.service';
import { pathOr } from 'ramda';

export default class AuthService extends BaseHttpService {
  async signin({ email, password }: any) {
    const result = await this.post('auth/signin', {
      email,
      password,
    });

    this.saveToken(pathOr('', ['data', 'accessToken'], result));
  }

  async signup({ email, password }: any) {
    const result = await this.post('auth/signup', {
      email,
      password,
    });

    this.saveToken(pathOr('', ['data', 'accessToken'], result));
  }

  async signout() {
    this.removeToken();
  }

  async validateToken() {
    if (!localStorage.getItem('accessToken')) {
      throw Error;
    }
    await this.post('auth/validate', {
      accessToken: this.accessToken,
    });

    return this.decodeToken();
  }
}

export const authService = new AuthService();
