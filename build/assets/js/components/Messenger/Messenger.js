import { Block } from '../../modules/Block.js';
export class Messenger extends Block {
    constructor(props) {
        super("div", 'messenger', props);
    }
    render() {
        const Handlebars = window.Handlebars;
        if (this.props) {
            this.messagesBoard = this.props.messagesBoardInstance.renderToString();
            if (this.props.currentChatInstance)
                this.currentChat = this.props.currentChatInstance.renderToString();
            if (this.props.chatInstance)
                this.chat = this.props.chatInstance.renderToString();
            if (this.props.senderInstance)
                this.sender = this.props.senderInstance.renderToString();
        }
        const template = `
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
    `;
        return Handlebars.compile(template)(Object.assign(Object.assign({}, this.props), { messagesBoard: this.messagesBoard, currentChat: this.currentChat, chat: this.chat, sender: this.sender }));
    }
}
//# sourceMappingURL=Messenger.js.map