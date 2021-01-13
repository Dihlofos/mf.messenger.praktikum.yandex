export const CurrentChatTemplate = `
  <div class="current-chat__wrapper">
    <div class="current-chat__image">

      <img width="34" height="34" src="
        {{#if avatar}}
            {{avatar}}
          {{else}}
            /assets/images/avatar.png
        {{/if}}
      " alt="{{title}}_avatar" />
    </div>
    <div class="current-chat__content">
      <h1 class="current-chat__name">{{title}}</h1>
      {{#if users}}
          <p class="current-chat__text">
            {{#each users}}
              <span>{{this.display_name}},</span>
            {{/each}}
          </p>
      {{/if}}
    </div>
    <div class="current-chat__actives">
        {{{tooltip}}}
        <button class="current-chat__btn js-current-chat-tooltip-trigger js-focus-visible" type="button">
          <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="1.5" cy="2" r="1.5" fill="#40375C" />
            <circle cx="1.5" cy="8" r="1.5" fill="#40375C" />
            <circle cx="1.5" cy="14" r="1.5" fill="#40375C" />
          </svg>
        </button>
    </div>
  </div>
  {{{renameForm}}}
  {{{userAddModal}}}
  `;
