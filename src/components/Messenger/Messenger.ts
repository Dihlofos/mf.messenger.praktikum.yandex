import { Block } from '../../modules/Block.js';
import { Chat } from '../Chat/Chat.js';
import { CurrentChat } from '../CurrentChat/CurrentChat.js';
import { MessagesBoard } from '../MessagesBoard/MessagesBoard.js';
import { Sender } from '../Sender/Sender.js';
import { MessengerTemplate } from './Messenger.template.js';

export type MessengerProps = {
  messagesBoardInstance: MessagesBoard;
  currentChatInstance?: CurrentChat;
  chatInstance?: Chat;
  senderInstance?: Sender;
};

export class Messenger extends Block {
  messagesBoard: string;
  currentChat: string;
  chat: string;
  sender: string;

  constructor(props: MessengerProps) {
    super('div', 'light full-screen', props);
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
    return Handlebars.compile(MessengerTemplate)({
      messagesBoard: this.messagesBoard,
      currentChat: this.currentChat,
      chat: this.chat,
      sender: this.sender,
    });
  }
}
