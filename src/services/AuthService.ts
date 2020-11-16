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
      .then((data: string) => {
        const dataObj = JSON.parse(data);
        dataObj.fields = [];

        if (dataObj.login) {
          dataObj.fields.push({
            value: dataObj.login,
            label: 'Логин',
          });
        }
        if (dataObj.first_name) {
          dataObj.fields.push({
            value: dataObj.first_name,
            label: 'Имя',
          });
        }
        if (dataObj.phone) {
          dataObj.fields.push({
            value: dataObj.phone,
            label: 'Телефон',
          });
        }

        if (dataObj.second_name) {
          dataObj.fields.push({
            value: dataObj.second_name,
            label: 'Фамилия',
          });
        }
        if (dataObj.display_name === null) {
          dataObj.display_name = dataObj.first_name;
        }
        if (dataObj.avatar === null) {
          dataObj.avatar = BASEAVATARURL;
        } else {
          dataObj.avatar = `${this.transport.baseUrl}${dataObj.avatar}`;
        }
        return dataObj;
      });
  }
}
