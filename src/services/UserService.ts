import { SimpleObject, UserItemProps } from '../interface';
import { HTTPTransport } from '../modules/Api';
import { BASEAVATARURL } from './constants';

export class UserService {
  transport: HTTPTransport;
  props: SimpleObject;

  constructor(props: SimpleObject) {
    this.transport = new HTTPTransport('https://ya-praktikum.tech', '/api/v2');
    this.props = props;
  }

  getUser() {
    return this.transport
      .get('/auth/user', { data: this.props })
      .then((data: SimpleObject) => {
        //Transform data
        data.fields = [];
        data.fields.push({
          value: data.email ? data.email : '',
          name: 'email',
          type: 'email',
          placeholder: 'Введите почту',
          label: 'Почта',
        });

        data.fields.push({
          value: data.login ? data.login : '',
          name: 'login',
          type: 'text',
          placeholder: 'Введите логин',
          label: 'Логин',
        });

        data.fields.push({
          value: data.first_name ? data.first_name : '',
          name: 'first_name',
          type: 'text',
          placeholder: 'Введите имя',
          label: 'Имя',
        });

        data.fields.push({
          value: data.phone ? data.phone : '',
          name: 'phone',
          type: 'tel',
          placeholder: 'Введите номер телефона',
          label: 'Телефон',
        });

        data.fields.push({
          value: data.second_name ? data.second_name : '',
          name: 'second_name',
          type: 'text',
          placeholder: 'Введите фамилию',
          label: 'Фамилия',
        });

        data.fields.push({
          value: '',
          name: 'oldPassword',
          type: 'text',
          placeholder: 'Введите cтарый пароль',
          label: 'Старый пароль',
        });

        data.fields.push({
          value: '',
          name: 'newPassword',
          type: 'text',
          placeholder: 'Введите новый пароль',
          label: 'Введите новый пароль',
        });

        data.display_name = {
          name: 'display_name',
          type: 'text',
          label: '',
          value: data.display_name
            ? data.display_name
            : data.first_name,
          nameField: true,
        };

        if (data.avatar === null) {
          data.avatar = {
            name: 'avatar',
            imageLink: 'assets/images/avatar.png',
          };
        } else {
          data.avatar = {
            name: 'avatar',
            imageLink: `${this.transport.baseUrl}${data.avatar}`,
          };
        }

        //delete unusables
        delete data.email;
        delete data.first_name;
        delete data.login;
        delete data.phone;
        delete data.second_name;

        return data;
      });
  }

  putProfile() {
    let requests: Promise<unknown>[] = [];
    if (!!this.props.avatar.name.length) {
      requests.push(this.putAvatar());
    }
    if (!!this.props.newPassword.length && !!this.props.oldPassword.length) {
      requests.push(this.putPassword());
    }
    requests.push(this.putProfileBody());

    return Promise.allSettled(requests);
  }

  putAvatar() {
    const { avatar } = this.props;
    let formData = new FormData();
    formData.append('avatar', avatar, avatar.name);
    return this.transport.put('/user/profile/avatar', {
      data: formData,
    });
  }

  putPassword() {
    const { newPassword, oldPassword } = this.props;
    return this.transport.put('/user/password', {
      data: {
        newPassword,
        oldPassword,
      },
    });
  }

  putProfileBody() {
    const {
      first_name,
      second_name,
      display_name,
      login,
      email,
      phone,
    } = this.props;
    return this.transport.put('/user/profile', {
      data: {
        first_name,
        second_name,
        display_name,
        login,
        email,
        phone,
      },
    });
  }

  postSearch() {
    const { login } = this.props;
    return this.transport
      .post('/user/search', {
        data: {
          login,
        },
      })
      .then((data: UserItemProps[]) => {
        return data.map((item) => ({
          ...item,
          display_name: item.display_name ? item.display_name : item.first_name,
          avatar: item.avatar
            ? `${this.transport.baseUrl}${item.avatar}`
            : BASEAVATARURL,
        }));
      });
  }
}
