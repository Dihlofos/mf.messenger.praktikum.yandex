export const ChatTemplate = `
{{#each chatGroups as |chatGroup|}}
  <article class="chat__group">
    <h2 class="chat__date">
      <time dateTime="2020-07-19">{{chatGroup.date}}</time>
    </h2>
    <div class="chat__dialog-list">
      {{#each chatGroup.chats as |chat|}}
        <article class="chat__dialog {{chat.mix}}">
          {{{chat.content}}}
          <footer class="chat__time">
          {{#if chat.read}}
            <svg width="11" height="5" viewBox="0 0 11 5" fill="none"
            xmlns="http://www.w3.org/2000/svg">
              <line y1="-0.5" x2="3.765" y2="-0.5"
                  transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33301)"
                  stroke="#40375C" />
              <line y1="-0.5" x2="5.6475" y2="-0.5"
                  transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.3584 5)"
                  stroke="#40375C" />
              <line y1="-0.5" x2="5.6475" y2="-0.5"
                  transform="matrix(0.705933 -0.708278 0.705933 0.708278 6.01611 5)"
                  stroke="#40375C" />
              </svg>
            {{/if}}
            <time dateTime="2020-07-19 11:56">{{chat.time}}</time>
          </footer>
        </article>
      {{/each}}
    </div>
  </article>
{{/each}}`;
//# sourceMappingURL=Chat.template.js.map