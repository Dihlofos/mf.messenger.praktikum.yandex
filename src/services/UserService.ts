import { SimpleObject, UserItemProps } from '../interface.js';
import { HTTPTransport } from '../modules/Api.js';
import { baseAvatarUrl } from './constans.js';

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
      .then((data: XMLHttpRequest) => {
        let dataObj = JSON.parse(data.response);
        //Transform data
        dataObj.fields = [];
        dataObj.fields.push({
          value: dataObj.email ? dataObj.email : '',
          name: 'email',
          type: 'email',
          placeholder: 'Введите почту',
          label: 'Почта',
        });

        dataObj.fields.push({
          value: dataObj.login ? dataObj.login : '',
          name: 'login',
          type: 'text',
          placeholder: 'Введите логин',
          label: 'Логин',
        });

        dataObj.fields.push({
          value: dataObj.first_name ? dataObj.first_name : '',
          name: 'first_name',
          type: 'text',
          placeholder: 'Введите имя',
          label: 'Имя',
        });

        dataObj.fields.push({
          value: dataObj.phone ? dataObj.phone : '',
          name: 'phone',
          type: 'tel',
          placeholder: 'Введите номер телефона',
          label: 'Телефон',
        });

        dataObj.fields.push({
          value: dataObj.second_name ? dataObj.second_name : '',
          name: 'second_name',
          type: 'text',
          placeholder: 'Введите фамилию',
          label: 'Фамилия',
        });

        dataObj.fields.push({
          value: '',
          name: 'oldPassword',
          type: 'text',
          placeholder: 'Введите cтарый пароль',
          label: 'Старый пароль',
        });

        dataObj.fields.push({
          value: '',
          name: 'newPassword',
          type: 'text',
          placeholder: 'Введите новый пароль',
          label: 'Введите новый пароль',
        });

        dataObj.display_name = {
          name: 'display_name',
          type: 'text',
          label: '',
          value: dataObj.display_name
            ? dataObj.display_name
            : dataObj.first_name,
          nameField: true,
        };

        if (dataObj.avatar === null) {
          dataObj.avatar = {
            name: 'avatar',
            imageLink: 'assets/images/avatar.png',
          };
        } else {
          dataObj.avatar = {
            name: 'avatar',
            imageLink: `${this.transport.BASEURL}${dataObj.avatar}`,
          };
        }

        //delete unusables
        delete dataObj.email;
        delete dataObj.first_name;
        delete dataObj.login;
        delete dataObj.phone;
        delete dataObj.second_name;

        return dataObj;
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
      .then((data: XMLHttpRequest) => {
        const jsonArray: UserItemProps[] = JSON.parse(data.response);
        return jsonArray.map((item) => ({
          ...item,
          display_name: item.display_name ? item.display_name : item.first_name,
          avatar: item.avatar
            ? `${this.transport.BASEURL}${item.avatar}`
            : baseAvatarUrl,
        }));
      });
  }
}
