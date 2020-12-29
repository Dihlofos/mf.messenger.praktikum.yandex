import { SimpleObject } from '../interface.js';
import { HTTPTransport } from '../modules/Api.js';
import { BASEAVATARURL } from './constants.js';

export class AuthService {
  transport: HTTPTransport;
  props: SimpleObject;

  constructor(props: SimpleObject) {
    this.transport = new HTTPTransport('https://ya-praktikum.tech', '/api/v2');
    this.props = props;
  }

  signin() {
    return this.transport.post('/auth/signin', { data: this.props });
  }

  signup() {
    return this.transport.post('/auth/signup', { data: this.props });
  }

  logout() {
    return this.transport.post('/auth/logout', { data: this.props });
  }

  getUser() {
    return this.transport
      .get('/auth/user', { data: this.props })
      .then((data: SimpleObject) => {
        data.fields = [];

        if (data.login) {
          data.fields.push({
            value: data.login,
            label: 'Логин',
          });
        }
        if (data.first_name) {
          data.fields.push({
            value: data.first_name,
            label: 'Имя',
          });
        }
        if (data.phone) {
          data.fields.push({
            value: data.phone,
            label: 'Телефон',
          });
        }

        if (data.second_name) {
          data.fields.push({
            value: data.second_name,
            label: 'Фамилия',
          });
        }
        if (data.display_name === null) {
          data.display_name = data.first_name;
        }
        if (data.avatar === null) {
          data.avatar = BASEAVATARURL;
        } else {
          data.avatar = `${this.transport.baseUrl}${data.avatar}`;
        }
        return data;
      });
  }
}
