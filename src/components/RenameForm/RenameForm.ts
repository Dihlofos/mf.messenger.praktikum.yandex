import { Block } from '../../modules/Block.js';

export type RenameFormProps = {
  mix: string;
}

export class RenameForm extends Block {
    constructor(props:RenameFormProps) {
      super("div", 'rename-form', props);
      this._instances.push(this);
    }

    show(): void {
      this.element.classList.add('is-shown');
    }

    hide(): void {
      this.element.classList.remove('is-shown');
    }

    render() {
      const Handlebars = window.Handlebars;
      const template : string | undefined = `
        <form class="rename-form__form js-form" method="POST">
          <input type="text" name="rename-chat" value="Фотография" />
          <button class="button button--mini rename-form__rename-btn js-focus-visible" type="submit">Сохранить</button>
        </form>
        `;
      return Handlebars.compile(template)(this.props);
    }
  }
