import { ButtonProps } from '../../components/Button/Button.js';
import { FieldProps } from '../../components/Field/Field.js';

export const loginData: {
  fieldsData: FieldProps[];
  buttonData: ButtonProps;
} = {
  fieldsData: [
    {
      name: 'login',
      type: 'text',
      label: 'Логин',
      value: '',
      mix: 'form__field',
    },
    {
      name: 'password',
      type: 'password',
      label: 'Пароль',
      value: '',
      mix: 'form__field',
    },
  ],
  buttonData: {
    text: 'Авторизоваться',
    mix: 'form__button',
    type: 'submit',
  },
};
