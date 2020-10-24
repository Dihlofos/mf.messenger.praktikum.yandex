import { Button } from '../../components/Button/Button.js';
import { Field } from '../../components/Field/Field.js';
import { Form } from '../../components/Form/Form.js';
import { registrationData } from './data.js';

function registrationPageRender(): void {
  const root: HTMLElement | null = document.querySelector('.root');
  const { fieldsData, buttonData } = registrationData;
  const fields = fieldsData.map((item) => new Field(item));
  const button = new Button(buttonData);

  const form = new Form({
    title: 'Регистрация',
    fieldInstances: fields,
    buttonInstance: button,
    linkText: 'Войти',
    linkHref: '/login.html',
  });

  if (root) {
    root.appendChild(form.getContent());
    fields.forEach((item) => {
      item.hydrate();
    });
    button.hydrate();
    form.hydrate();
  }
}
document.addEventListener('DOMContentLoaded', function () {
  registrationPageRender();
});

export default registrationPageRender;
