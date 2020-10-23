import { Block } from '../../modules/Block.js';
import { Chat } from '../Chat/Chat.js';
import { CurrentChat } from '../CurrentChat/CurrentChat.js';
import { MessagesBoard } from '../MessagesBoard/MessagesBoard.js';
import { Sender } from '../Sender/Sender.js';

export type MessengerProps = {
  messagesBoardInstance: MessagesBoard;
  currentChatInstance?:CurrentChat;
  chatInstance?: Chat;
  senderInstance?: Sender;
}

export class Messenger extends Block {
  messagesBoard: MessagesBoard;
  currentChat: CurrentChat;
  chat: Chat;
  sender: Sender;

  constructor(props:MessengerProps) {
    super("div", 'messenger', props);
  } 
  
  render() {
    const Handlebars = window.Handlebars;
    if (this.props) {
      this.messagesBoard = this.props.messagesBoardInstance.renderToString();  
      if (this.props.currentChatInstance) this.currentChat = this.props.currentChatInstance.renderToString();    
      if (this.props.chatInstance) this.chat = this.props.chatInstance.renderToString();
      if (this.props.senderInstance) this.sender = this.props.senderInstance.renderToString();
    }

    const template:string = `
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
    ` 
    return Handlebars.compile(template)(
      {
        ...this.props,
        messagesBoard: this.messagesBoard,
        currentChat: this.currentChat,
        chat: this.chat,
        sender: this.sender
      }
    );
    
    
  }
}