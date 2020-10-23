import { Block } from '../../modules/Block.js';
export class CurrentChat extends Block {
    constructor(props) {
        super("header", 'current-chat', props);
    }
    render() {
        const Handlebars = window.Handlebars;
        let template = `
        <div class="current-chat__wrapper">
          <div class="current-chat__image">
            <img width="34" height="34" src="{{imageLink}}" alt="{{imageAlt}}" />
          </div>
          <div class="current-chat__content">
            <h1 class="current-chat__name">{{name}}</h1>
            <p class="current-chat__text">{{time}}</p>
          </div>
          <div class="current-chat__actives">
              {{{tooltip}}}
              <button class="current-chat__btn js-tooltip-trigger js-focus-visible" data-tooltip="chat-options" type="button">
                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1.5" cy="2" r="1.5" fill="#40375C" />
                  <circle cx="1.5" cy="8" r="1.5" fill="#40375C" />
                  <circle cx="1.5" cy="14" r="1.5" fill="#40375C" />
                </svg>
              </button>
          </div>
        </div>
        {{{renameForm}}}
        `;
        this.tooltip = this.props.tooltipInstance.renderToString();
        this.renameForm = this.props.renameFormInstance.renderToString();
        return Handlebars.compile(template)(Object.assign(Object.assign({}, this.props), { tooltip: this.tooltip, renameForm: this.renameForm }));
    }
}
//# sourceMappingURL=CurrentChat.js.map