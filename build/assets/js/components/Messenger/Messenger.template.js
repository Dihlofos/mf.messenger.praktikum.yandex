export const MessengerTemplate = `
  <div class="messenger">
    {{{messagesBoard}}}

    <div class="messenger__content">
      {{#if currentChat}}
          {{{currentChat}}}
          {{{chat}}}
          {{{sender}}}
      {{^}}
        <main class="messenger__empty">Выберите чат чтобы отправить сообщение</main>
      {{/if}}
    </div>
  </div>
`;
//# sourceMappingURL=Messenger.template.js.map