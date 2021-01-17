import { Button } from '../../components/Button/Button';
import { Field } from '../../components/Field/Field';
import { Form } from '../../components/Form/Form';
import { Block } from '../../modules';
import loginData from './data';

export class LoginPage extends Block {
  constructor() {
    super('div', 'page');
  }

  render() {
    const { fieldsData, buttonData } = loginData;
    const fields = fieldsData.map((item) => new Field(item));
    const button = new Button(buttonData);

    const form = new Form({
      title: 'Вход',
      fieldInstances: fields,
      buttonInstance: button,
      linkText: 'Нет аккаунта?',
      linkHref: '/registration',
      action: 'signin',
      error: '',
    });

    document.title = 'Login';

    return form.renderToString();
  }
}

export default LoginPage;
