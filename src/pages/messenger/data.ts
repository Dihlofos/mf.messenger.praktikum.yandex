import { ButtonProps } from '../../components/Button/Button.js';
import { ChatProps } from '../../components/Chat/Chat.js';
import { ChatCardProps } from '../../components/ChatCard/ChatCard.js';
import { CurrentChatProps } from '../../components/CurrentChat/CurrentChat.js';
import { FieldProps } from '../../components/Field/Field.js';
import { TooltipProps } from '../../components/Tooltip/Tooltip.js';

export type messengerDataProps = {
  searchFieldData: FieldProps;
  chatCardsData: ChatCardProps[];
  bottomtooltipData: TooltipProps;
  chatData: ChatProps | null;
  chatCreateModalButtonData: ButtonProps;
  currentChat?: CurrentChatProps;
};

const messengerData: messengerDataProps = {
  searchFieldData: {
    name: 'search',
    type: 'text',
    label: 'Поиск',
    value: '',
    search: true,
    mix: 'field--search messages-board__search',
  },
  chatCreateModalButtonData: {
    text: 'Создать чат',
    type: 'submit',
  },
  chatCardsData: [],
  bottomtooltipData: {
    mix: 'tooltip--bottom-left',
    iconButtons: [
      {
        name: 'Фото или видео',
        target: 'pickMedia',
        svg:
          '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V14L14.5194 12.4052C13.5108 12.1362 12.4714 12 11.4275 12H10.5725C9.52864 12 8.48921 12.1362 7.48057 12.4052L1.5 14V4C1.5 2.61929 2.61929 1.5 4 1.5ZM0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4ZM8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z" fill="#40375C" /></svg>',
      },
      {
        name: 'Файл',
        target: 'pickFile',
        svg:
          '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V12H16C13.7909 12 12 13.7909 12 16V20.5H4C2.61929 20.5 1.5 19.3807 1.5 18V4C1.5 2.61929 2.61929 1.5 4 1.5ZM12 22H4C1.79086 22 0 20.2091 0 18V4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V12V18C22 20.2091 20.2091 22 18 22H12Z" fill="#40375C" /> </svg>',
      },
      {
        name: 'Локация',
        target: 'pickLocation',
        svg:
          '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 11C20.5 16.2467 16.2467 20.5 11 20.5C5.75329 20.5 1.5 16.2467 1.5 11C1.5 5.75329 5.75329 1.5 11 1.5C16.2467 1.5 20.5 5.75329 20.5 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z" fill="#40375C" /> </svg>',
      },
    ],
  },
  currentChat: undefined,
  chatData: null,
  // chatData: {
  //   mix: 'messenger__chat',
  //   chatGroups: [
  //     {
  //       date: '19 июля',
  //       chats: [
  //         {
  //           content:
  //             '<p>Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. </p><p>Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.</p>',
  //           time: '11:56',
  //         },
  //         {
  //           content:
  //             '<img class="chat__image" alt="dialog-image" src="assets/images/dialog-image.jpg" />',
  //           mix: 'chat__dialog--image',
  //           time: '11:56',
  //         },
  //         {
  //           content: '<p>Круто</p>',
  //           mix: '--me',
  //           read: true,
  //           time: '11:56',
  //         },
  //       ],
  //     },
  //     {
  //       date: '20 июля',
  //       chats: [
  //         {
  //           content:
  //             '<p>Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. </p><p>Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.</p>',
  //           time: '11:56',
  //         },
  //         {
  //           content:
  //             '<img class="chat__image" alt="dialog-image" src="assets/images/dialog-image.jpg" />',
  //           mix: 'chat__dialog--image',
  //           time: '11:56',
  //         },
  //         {
  //           content: '<p>Круто</p>',
  //           mix: '--me',
  //           read: true,
  //           time: '11:56',
  //         },
  //       ],
  //     },
  //   ],
  // },
};

export default messengerData;
