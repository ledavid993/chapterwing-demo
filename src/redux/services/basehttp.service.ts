import axios from 'axios';
import jwtDecode from 'jwt-decode';

export default class BaseHttpService {
  BASE_URL = 'http://wingpen-env.eba-8uiqhem9.us-east-2.elasticbeanstalk.com';
  _accessToken: string | null = null;

  constructor() {}

  async get(endpoint: string, options = {}) {
    // Object.assign(options, this.getCommonOptions());
    return axios
      .get(`${this.BASE_URL}/${endpoint}`, options)
      .catch((error: any) => this.handleHttpError(error));
  }

  async post(endpoint: string, data = {}, options = {}) {
    Object.assign(options, this.getCommonOptions());
    return axios
      .post(`${this.BASE_URL}/${endpoint}`, data, options)
      .catch((error: any) => this.handleHttpError(error));
  }

  async delete(endpoint: string, options = {}) {
    Object.assign(options, this.getCommonOptions());
    return axios
      .delete(`${this.BASE_URL}/${endpoint}`, options)
      .catch((error: any) => this.handleHttpError(error));
  }

  async put(endpoint: string, data = {}, options = {}) {
    Object.assign(options, this.getCommonOptions());
    return axios
      .put(`${this.BASE_URL}/${endpoint}`, data, options)
      .catch((error: any) => this.handleHttpError(error));
  }

  get accessToken() {
    return this._accessToken ? this._accessToken : this.loadToken();
  }

  handleHttpError(error: any) {
    console.log(error);
    throw Error(error);
  }

  getCommonOptions() {
    if (typeof window !== 'undefined') {
      const token = this.loadToken();

      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }
  }

  saveToken(accessToken: string) {
    this._accessToken = accessToken;
    return localStorage.setItem('accessToken', accessToken);
  }

  loadToken() {
    const token = localStorage.getItem('accessToken');
    this._accessToken = token;
    return token;
  }

  removeToken() {
    localStorage.removeItem('accessToken');
  }

  decodeToken() {
    const accessToken: string | null = this.accessToken;

    if (accessToken) {
      return jwtDecode(accessToken);
    }
  }
}
