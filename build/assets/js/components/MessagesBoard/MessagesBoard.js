import { Block } from '../../modules/Block.js';
export class MessagesBoard extends Block {
    constructor(props) {
        super('aside', 'messages-board messenger__board', props);
    }
    componentDidMount() {
        setTimeout(() => {
            this.hydrate();
        }, 0);
    }
    initEvents() {
        let chatCreateModalOpener = document.querySelector('.js-create-chat');
        if (chatCreateModalOpener) {
            chatCreateModalOpener.addEventListener('click', () => {
                this.props.chatCreateModalInstance.show();
            });
        }
    }
    render() {
        const Handlebars = window.Handlebars;
        if (this.props) {
            this.messagesList = this.props.messagesListInstance.renderToString();
            this.searchField = this.props.searchFieldInstance.renderToString();
            this.chatCreateModal = this.props.chatCreateModalInstance.renderToString();
        }
        const teamplate = `
      <div class="messages-board__top">
        <button class="messages-board__create js-create-chat js-focus-visible" type="button" title="Создать чат">+</button>
          <a class="messages-board__link js-focus-visible" href="{{linkHref}}">
              {{linkText}}
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 1" stroke="#40375C" />
              </svg>
          </a>
      </div>
      {{{searchField}}}
      {{{chatCreateModal}}}
      {{{messagesList}}}

    `;
        return Handlebars.compile(teamplate)(Object.assign(Object.assign({}, this.props), { messagesList: this.messagesList, searchField: this.searchField, chatCreateModal: this.chatCreateModal }));
    }
}
//# sourceMappingURL=MessagesBoard.js.map