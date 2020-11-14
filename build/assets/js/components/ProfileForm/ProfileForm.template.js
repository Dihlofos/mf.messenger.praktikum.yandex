export const ProfileFormTemplate = `
  <form class="profile__form js-form" method="POST">
    {{{avatar}}}
    {{{name}}}
    <ul class="profile__field-list">
      {{#each fields}}
        <li class="profile__field-item">
          {{{this}}}
        </li>
      {{/each}}
    </ul>
    <p class="profile__error">{{error}}</p>
    {{{button}}}
  </form>
`;
//# sourceMappingURL=ProfileForm.template.js.map