export const ChatCreateModalTemplate = `
  <form class="chat-create-modal__form js-chat-create-form">
    <input class="chat-create-modal__input js-focus-visible" id="create-chat" name="create-chat" type="text" placeholder="Название нового чата"/>
    {{{submitButton}}}
  </form>
  <div class="chat-create-modal__milk js-chat-create-modal-milk"></div>
`;
