import { ButtonProps } from '../../components/Button/Button.js';
import { FieldProps } from '../../components/Field/Field.js';

export const registrationData: {
  fieldsData: FieldProps[];
  buttonData: ButtonProps;
} = {
  fieldsData: [
    {
      name: 'email',
      type: 'email',
      label: 'Почта',
      value: '',
      mix: 'form__field',
    },
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
    {
      name: 'password_repeat',
      type: 'password',
      label: 'Пароль (еще раз)',
      value: '',
      mix: 'form__field',
    },
    {
      name: 'first_name',
      type: 'text',
      label: 'Имя',
      value: '',
      mix: 'form__field',
    },
    {
      name: 'second_name',
      type: 'text',
      label: 'Фамилия',
      value: '',
      mix: 'form__field',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Телефон',
      value: '',
      mix: 'form__field',
    },
  ],
  buttonData: {
    text: 'Зарегистрироваться',
    mix: 'form__button',
    type: 'submit',
  },
};
