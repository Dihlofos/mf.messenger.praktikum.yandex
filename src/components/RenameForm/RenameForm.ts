import { Block } from '../../modules/Block.js';

export type RenameFormProps = {
  mix: string;
  value: string;
};

export class RenameForm extends Block {
  constructor(props: RenameFormProps) {
    super('div', 'rename-form', props);
    this._instances.push(this);
  }

  componentDidMount() {
    //TODO - как бы избавиться от setTimeout
    setTimeout(() => {
      this.hydrate();
    }, 0);
  }

  show(): void {
    this.element.classList.add('is-shown');
  }

  hide(): void {
    this.element.classList.remove('is-shown');
  }

  render() {
    const Handlebars = window.Handlebars;
    const template: string | undefined = `
      <form class="rename-form__form js-form" method="POST">
        <input type="text" name="rename-chat" value="{{value}}" />
        <button class="button button--mini rename-form__rename-btn js-focus-visible" type="submit">Сохранить</button>
      </form>
    `;
    return Handlebars.compile(template)(this.props);
  }
}
