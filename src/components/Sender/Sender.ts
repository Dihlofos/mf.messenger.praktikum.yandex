import { Block } from '../../modules/Block.js';
import { Tooltip } from '../Tooltip/Tooltip.js';
import { SenderTemplate } from './Sender.template.js';

export type SenderProps = {
  tooltipInstance: Tooltip;
};

export class Sender extends Block {
  tooltip: string;
  constructor(props: SenderProps) {
    super('footer', 'sender', props);
    this._instances.push(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.hydrate();
    }, 0);
  }

  initEvents() {
    const form: HTMLFormElement | null = this._element?.querySelector('form');
    const input: HTMLInputElement | null = this._element?.querySelector(
      'input'
    );

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!!!input?.value.length) {
        return false;
      } else {
        console.log({
          message: input?.value,
        });
      }
    });
  }

  render() {
    const Handlebars = window.Handlebars;

    this.tooltip = this.props.tooltipInstance.renderToString();

    return Handlebars.compile(SenderTemplate)({
      ...this.props,
      tooltip: this.tooltip,
    });
  }
}
