import { Button } from '../../components/Button/Button';
import { Field } from '../../components/Field/Field';
import { Form } from '../../components/Form/Form';
import { Block } from '../../modules/Block';
import { registrationData } from './data';

export class RegistrationPage extends Block {
  constructor() {
    super('div', 'page');
  }

  render() {
    const { fieldsData, buttonData } = registrationData;
    const fields = fieldsData.map((item) => new Field(item));
    const button = new Button(buttonData);

    const form = new Form({
      title: 'Регистрация',
      fieldInstances: fields,
      buttonInstance: button,
      linkText: 'Войти',
      linkHref: '/messenger',
      action: 'signup',
      error: '',
    });
    document.title = 'Registration';
    return form.renderToString();
  }
}
export default RegistrationPage;
