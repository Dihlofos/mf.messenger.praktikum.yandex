import { Button } from '../../components/Button/Button.js';
import { Field } from '../../components/Field/Field.js';
import { Form } from '../../components/Form/Form.js';
import { loginData } from './data.js';

function loginPageRender(): void {
  const root: HTMLElement | null = document.querySelector('.root');
  const { fieldsData, buttonData } = loginData;
  const fields = fieldsData.map((item) => new Field(item));
  const button = new Button(buttonData);

  const form = new Form({
    title: 'Вход',
    fieldInstances: fields,
    buttonInstance: button,
    linkText: 'Нет аккаунта?',
    linkHref: '/registration.html',
  });

  if (root) {
    root.appendChild(form.getContent());

    //Линкуем конкретные инстансы, для валидации
    fields.forEach((item) => {
      item.hydrate();
    });
    form.hydrate();
  }
}
document.addEventListener('DOMContentLoaded', function () {
  loginPageRender();
});

export default loginPageRender;
