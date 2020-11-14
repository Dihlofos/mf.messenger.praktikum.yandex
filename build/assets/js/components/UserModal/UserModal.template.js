export const UserModalTemplate = `
  <div class="user-modal__box is-shown">
    <div class="user-modal__col">
      <h4 class="user-modal__title">Собеседники</h4>
      <ul class="user-modal__list">
        {{#each usersInChat}}
          <li class="user-modal__item user-modal__item--remove js-user-remove" data-id="{{id}}" title="Выгнать наглеца из чата">
            <img class="user-modal__avatar" src="{{avatar}}" />
            <span class="user-modal__user">{{display_name}}</span>
          </li>
        {{/each}}
      </ul>
    </div>
    <div class="user-modal__col">
      <h4 class="user-modal__title">Добавить собеседника</h4>
      <form class="user-modal__form js-user-add-form">
      <input class="user-modal__input js-focus-visible" id="login" name="login" type="text" autocomplete="off" placeholder="Введите логин пользователя"/>
      {{{findButton}}}
    </form>
    {{#if userList}}
      <ul class="user-modal__list">
        {{#each userList}}
          <li class="user-modal__item js-user-add" data-id="{{id}}">
            <img class="user-modal__avatar" src="{{avatar}}" />
            <span class="user-modal__user">{{display_name}}</span>
          </li>
        {{/each}}
      </ul>
    {{/if}}
    {{#if nothingFound}}
      <div class="user-modal__nothingFound">Не найдено пользователя с таким логином</div>
    {{/if}}
    </div>
  </div>
  <div class="chat-create-modal__milk js-user-add-milk"></div>
`;
//# sourceMappingURL=UserModal.template.js.map