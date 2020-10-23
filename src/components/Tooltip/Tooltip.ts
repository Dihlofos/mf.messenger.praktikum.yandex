import { Block } from '../../modules/Block.js';

export type TooltipProps = {
    mix: string;
    iconButtons: {
        name: string,
        svg: string
    }[]
}

export class Tooltip extends Block {
  constructor(props:TooltipProps) {
    super("ul", 'tooltip', props);
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

    let template = `
        <ul class="icon-buttons">
            {{#each iconButtons}}
                <li class="icon-buttons__item">
                    <button class="icon-buttons__btn js-focus-visible" type="button">
                        {{{svg}}}
                        <span>{{name}}</span>
                    </button>
                </li>
            {{/each}}
        </ul>`
    return Handlebars.compile(template)({...this.props})
  }
}


