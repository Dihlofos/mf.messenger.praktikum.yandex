import { LoginForm } from '../../modules/loginForm.js'
import { Button } from '../../modules/button.js'

function loginPage():void {
  const root: HTMLElement | null = document.querySelector(".root");
  const button = new Button({
    text: 'Авторизоваться',
    class: 'entry-box__button js-focus-visible',
    type: 'submit'
  })
  const loginForm = new LoginForm({
    title: 'Вход',
    fields: [
      {
        name: 'login',
        type: 'email',
        label: 'Почта',
        error: 'Не верно набрана почта',
        value: ''
      },
      {
        name: 'password',
        type: 'password',
        label: 'Пароль',
        error: '',
        value: ''
      }
    ],
    button: button.render(),
    linkText: 'Нет аккаунта?',
    linkHref: '/registration',    
  })
  if (root) {
    root.appendChild(loginForm.getContent())
  }
  
}
document.addEventListener("DOMContentLoaded", function () {
    loginPage();
  
});

export default loginPage;
