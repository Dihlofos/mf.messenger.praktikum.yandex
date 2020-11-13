import { Block } from '../../modules/Block.js';

export type TooltipProps = {
  mix: string;
  onTooltipClick?: (event: Event) => void;
  iconButtons: {
    name: string;
    svg: string;
    target: string;
  }[];
};

export class Tooltip extends Block {
  constructor(props: TooltipProps) {
    super('ul', 'tooltip', props);
    this._instances.push(this);
  }

  componentDidMount() {
    //TODO - как бы избавиться от setTimeout
    setTimeout(() => {
      this.hydrate();
    }, 0);
  }

  initEvents() {
    const actives: NodeListOf<
      HTMLButtonElement
    > | null = document.querySelectorAll('.js-icon-button');
    if (actives && this.props.onTooltipClick) {
      actives?.forEach((active: HTMLButtonElement) => {
        active.addEventListener('click', this.props.onTooltipClick);
      });
    }
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
                    <button class="js-icon-button icon-buttons__btn js-focus-visible" data-target="{{target}}" type="button">
                        {{{svg}}}
                        <span>{{name}}</span>
                    </button>
                </li>
            {{/each}}
        </ul>`;
    return Handlebars.compile(template)({ ...this.props });
  }
}
