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

  async signUp({ email, password }: any) {
    const result = await this.post('auth/signup', {
      email,
      password,
    });

    this.saveToken(pathOr('', ['data', 'accessToken'], result));
  }

  async signOut() {
    this.removeToken();
  }

  async validateToken() {
    await this.post('auth/validate', {
      accessToken: this.accessToken,
    });

    return this.decodeToken();
  }
}

export const authService = new AuthService();
