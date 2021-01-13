import { MessageSubmit } from '../../interface.js';
import { Block } from '../../modules/Block.js';
import { Store } from '../../modules/Store.js';
import { Tooltip } from '../Tooltip/Tooltip.js';
import { SenderTemplate } from './Sender.template.js';

export type SenderProps = {
  tooltipInstance: Tooltip;
  onSubmit: (message: MessageSubmit) => void;
  mix?: string;
};

export class Sender extends Block {
  tooltip: string;
  store: Store;

  constructor(props: SenderProps) {
    super('footer', 'sender', props);
    this._instances.push(this);
  }

  componentDidMount() {
    this.store = new Store();
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
        this.props.onSubmit({ content: input?.value, type: "message" })
        input.value = '';
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
