import { Block } from '../../modules';
import { Chat } from '../Chat/Chat';
import { CurrentChat } from '../CurrentChat/CurrentChat';
import { MessagesBoard } from '../MessagesBoard/MessagesBoard';
import { Sender } from '../Sender/Sender';
import template from './Messenger.handlebars';

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
    if (this.props) {
      this.messagesBoard = this.props.messagesBoardInstance.renderToString();
      if (this.props.currentChatInstance) { this.currentChat = this.props.currentChatInstance.renderToString(); }
      if (this.props.chatInstance) { this.chat = this.props.chatInstance.renderToString(); }
      if (this.props.senderInstance) { this.sender = this.props.senderInstance.renderToString(); }
    }
    return template({
      messagesBoard: this.messagesBoard,
      currentChat: this.currentChat,
      chat: this.chat,
      sender: this.sender,
    });
  }
}
