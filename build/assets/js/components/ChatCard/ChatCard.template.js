export const ChatCardTemplate = `
  <div class="chat-card {{mix}} js-focus-visible" tabindex="0" role="button">
    <div class="chat-card__wrapper">
      <div class="chat-card__image">
        <img width="47" height="47" src="{{imageHref}}" alt="{{title}}_avatar" />
      </div>
      <div class="chat-card__content">
        <p class="chat-card__name">{{title}}</p>
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
`;
//# sourceMappingURL=ChatCard.template.js.map