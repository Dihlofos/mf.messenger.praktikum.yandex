"use strict";
// import { Button } from '../../components/Button/Button.js';
// import { ChatCard } from '../../components/ChatCard/ChatCard.js';
// import { Field } from '../../components/Field/Field.js';
// import { MessagesBoard } from '../../components/MessagesBoard/MessagesBoard.js';
// import { MessagesList } from '../../components/MessagesList/MessagesList.js';
// import { Messenger } from '../../components/Messenger/Messenger.js';
// import { Modal } from '../../components/Modal/Modal.js';
// import { messengerEmptyData } from './data.js';
// function messageEmptyRender(): void {
//   const root: HTMLElement | null = document.querySelector('.root');
//   const { searchFieldData, chatCardsData } = messengerEmptyData;
//   const searchField: Field = new Field(searchFieldData);
//   const chatCards: ChatCard[] = chatCardsData.map((item) => new ChatCard(item));
//   const messageList: MessagesList = new MessagesList({
//     chatCardInstances: chatCards,
//   });
//   const messageBoard: MessagesBoard = new MessagesBoard({
//     linkText: 'Профиль',
//     linkHref: '/profile.html',
//     messagesListInstance: messageList,
//     searchFieldInstance: searchField,
//   });
//   const messenger = new Messenger({
//     messagesBoardInstance: messageBoard,
//   });
//   const modal = new Modal({
//     title: 'Вы хотите удалить чат',
//     deleteButtonInstance: new Button({
//       text: 'Удалить',
//       mix: 'button--red delete-dialog__button',
//       type: 'button',
//     }),
//     cancelButtonInstance: new Button({
//       text: 'Отмена',
//       mix: 'button--grey delete-dialog__button',
//       type: 'button',
//     }),
//   });
//   if (root) {
//     root.appendChild(messenger.getContent());
//     root.appendChild(modal.getContent());
//   }
// }
// document.addEventListener('DOMContentLoaded', function () {
//   messageEmptyRender();
// });
// export default messageEmptyRender;
//# sourceMappingURL=messengerEmpty.js.map