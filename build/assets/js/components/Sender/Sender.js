import { Block } from '../../modules/Block.js';
export class Sender extends Block {
    constructor(props) {
        super('footer', 'sender', props);
        this._instances.push(this);
    }
    componentDidMount() {
        //TODO - как бы избавиться от setTimeout
        setTimeout(() => {
            this.hydrate();
        }, 0);
    }
    initEvents() {
        var _a, _b;
        const form = (_a = this._element) === null || _a === void 0 ? void 0 : _a.querySelector('form');
        const input = (_b = this._element) === null || _b === void 0 ? void 0 : _b.querySelector('input');
        form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!!!(input === null || input === void 0 ? void 0 : input.value.length)) {
                return false;
            }
            else {
                console.log({
                    message: input === null || input === void 0 ? void 0 : input.value,
                });
            }
        });
    }
    render() {
        const Handlebars = window.Handlebars;
        const template = `
      <form class="sender__form js-form" method="POST">
        <div class="sender__pick">
          {{{tooltip}}}
          <button class="sender__pickBtn js-tooltip-trigger js-focus-visible" type="button">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7.18661 13.5L14.7628 5.92389L15.7056 6.8667L8.12942 14.4428L7.18661 13.5Z"
                    fill="#40375C" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M9.70077 16.014L17.2769 8.43781L18.2197 9.38062L10.6436 16.9568L9.70077 16.014Z"
                    fill="#40375C" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M15.0435 21.3567L22.6197 13.7806L23.5625 14.7234L15.9864 22.2995L15.0435 21.3567Z"
                    fill="#40375C" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17.5572 23.8706L25.1334 16.2945L26.0762 17.2373L18.5 24.8134L17.5572 23.8706Z"
                    fill="#40375C" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17.5574 23.8709C14.9423 26.486 10.7118 26.4954 8.10829 23.8919C5.50479 21.2884 5.51421 17.0579 8.12933 14.4428L7.18652 13.5C4.04838 16.6381 4.03708 21.7148 7.16127 24.839C10.2855 27.9632 15.3621 27.9518 18.5002 24.8137L17.5574 23.8709Z"
                    fill="#40375C" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M22.6195 13.7806L23.5623 14.7234C26.003 12.2826 26.0118 8.3341 23.5819 5.90417C21.152 3.47424 17.2035 3.48303 14.7627 5.92381L15.7055 6.86662C17.6233 4.94887 20.7257 4.94196 22.6349 6.85119C24.5441 8.76042 24.5372 11.8628 22.6195 13.7806Z"
                    fill="#40375C" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M9.70068 16.0144C7.95727 17.7578 7.95099 20.5782 9.68665 22.3138C11.4223 24.0495 14.2427 24.0432 15.9861 22.2998L15.0433 21.357C13.8229 22.5774 11.8486 22.5818 10.6337 21.3668C9.41871 20.1518 9.4231 18.1776 10.6435 16.9572L9.70068 16.0144Z"
                    fill="#40375C" />
            </svg>
          </button>
        </div>
        <div class="sender__field">
          <input type="text" name="message" id="message" placeholder="Сообщение" autocomplete="off" />
        </div>
        <button class="sender__submit js-focus-visible" type="submit">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="14" fill="#40375C" />
            <rect x="8" y="13.2" width="11" height="1.6" fill="white" />
            <path d="M15 9L19 14L15 19" stroke="white" stroke-width="1.6" />
          </svg>
        </button>
      </form>
    `;
        this.tooltip = this.props.tooltipInstance.renderToString();
        return Handlebars.compile(template)(Object.assign(Object.assign({}, this.props), { tooltip: this.tooltip }));
    }
}
//# sourceMappingURL=Sender.js.map