import { AvatarProps } from '../../components/Avatar/Avatar';
import { ButtonProps } from '../../components/Button/Button';
import { ProfileFieldProps } from '../../components/ProfileField/ProfileField';

const profileEditData: {
  buttonData: ButtonProps;
  fields: ProfileFieldProps[];
  avatar: AvatarProps;
  display_name: ProfileFieldProps;
} = {
  buttonData: {
    text: 'Сохранить',
    type: 'submit',
    mix: 'profile__submit-btn',
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      label: 'Почта',
      value: 'mail@inbox.com',
      placeholder: 'Введите почту',
    },
    {
      name: 'login',
      type: 'text',
      label: 'Логин',
      value: 'username',
      placeholder: 'Введите логин',
    },
    {
      name: 'first_name',
      type: 'text',
      label: 'Имя',
      value: '',
      placeholder: 'Введите имя',
    },
    {
      name: 'second_name',
      type: 'text',
      label: 'Фамилия',
      value: '',
      placeholder: 'Введите фамилию',
    },
    {
      name: 'phone',
      type: 'tel',
      label: 'Номер телефона',
      value: '',
      placeholder: 'Введите номер телефона',
    },
    {
      name: 'oldPassword',
      type: 'password',
      label: 'Старый пароль',
      value: '',
      placeholder: 'Введите cтарый пароль',
    },
    {
      name: 'newPassword',
      type: 'password',
      label: 'Новый пароль',
      value: '',
      placeholder: 'Введите новый пароль',
    },
  ],
  avatar: {
    name: 'avatar',
    imageLink: 'assets/images/avatar.jpg',
  },
  display_name: {
    name: 'name',
    type: 'text',
    label: '',
    value: 'Евгений',
    nameField: true,
  },
};

export default profileEditData;
