import { Block } from '../../modules/Block.js';

export type ChatCardProps = {
  imageHref: string;
  imageAlt: string;
  name: string;
  text: string;
  fulltime: string;
  time: string;
  unread?: number;
  mix?: string;
}

export class ChatCard extends Block {
  constructor(props:ChatCardProps) {
    super("li", '', props);
    this._instances.push(this);
  }

  render() {
    const Handlebars = window.Handlebars;
    const template = `
        <div class="chat-card {{mix}} js-focus-visible" tabindex="0">
          <div class="chat-card__wrapper">
            <div class="chat-card__image">
              <img width="47" height="47" src="{{imageHref}}" alt="{{imageAlt}}" />
            </div>
            <div class="chat-card__content">
              <p class="chat-card__name">{{name}}</p>
              <p class="chat-card__text">{{{text}}}</p>
            </div>
            <div class="chat-card__info">
              <time dateTime="{{fulltime}}" class="chat-card__time">{{time}}</time>
              {{#if unread}}
                <p class="chat-card__new-msg">{{unread}}</p>
              {{/if}}

            </div>
          </div>
        </div>
    `
    return Handlebars.compile(template)(this.props)
  }
}


