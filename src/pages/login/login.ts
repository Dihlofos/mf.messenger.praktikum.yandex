import { Button } from "../../components/Button/Button.js";
import { Field } from "../../components/Field/Field.js";
import { Form } from "../../components/Form/Form.js";


function loginPageRender():void {
  const root: HTMLElement | null = document.querySelector(".root");

  const fields = [
    new Field({
      name: 'login',
      type: 'email',
      label: 'Почта',
      value: '',
      mix: 'form__field'
    }),
    new Field({
      name: 'password',
      type: 'password',
      label: 'Пароль',
      value: '',
      mix: 'form__field'
    })
  ]

  const button = new Button({
    text: 'Авторизоваться',
    mix: 'form__button',
    type: 'submit'
  })

  const form = new Form({
    title: 'Вход',
    fieldInstances: fields,
    buttonInstance: button,
    linkText: 'Нет аккаунта?',
    linkHref: '/registration.html',
  })


  if (root) {
    root.appendChild(form.getContent());
    fields.forEach((item)=>{
      item.hydrate();
    })
    form.hydrate();

  }
}
document.addEventListener("DOMContentLoaded", function () {
  loginPageRender();
});

export default loginPageRender;
