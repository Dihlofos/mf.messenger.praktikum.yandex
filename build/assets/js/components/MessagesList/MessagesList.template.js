export const MessagesListTemplate = `
  {{#if messages}}
    {{#each messages}}
      {{{this}}}
    {{/each}}
  {{else}}
    <p class="messages-list__empty">У вас еще нет ни одного чата.</p>
  {{/if}}
`;
//# sourceMappingURL=MessagesList.template.js.map