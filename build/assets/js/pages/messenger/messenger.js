import { Button } from "../../components/Button/Button.js";
import { Chat } from "../../components/Chat/Chat.js";
import { ChatCard } from "../../components/ChatCard/ChatCard.js";
import { CurrentChat } from "../../components/CurrentChat/CurrentChat.js";
import { Field } from "../../components/Field/Field.js";
import { MessagesBoard } from "../../components/MessagesBoard/MessagesBoard.js";
import { MessagesList } from "../../components/MessagesList/MessagesList.js";
import { Messenger } from "../../components/Messenger/Messenger.js";
import { Modal } from "../../components/Modal/Modal.js";
import { RenameForm } from "../../components/RenameForm/RenameForm.js";
import { Sender } from "../../components/Sender/Sender.js";
import { Tooltip } from "../../components/Tooltip/Tooltip.js";
// TODO убрать type
// type - Временная вещь, чтобы сгенрировать разные статичные страницы
// Так как разница между разными статичными страница минимальна
// В дальнейшем, само собой это уйдет
function messengerRender(type) {
    const root = document.querySelector(".root");
    const searchField = new Field({
        name: 'search',
        type: 'text',
        label: 'Поиск',
        value: '',
        search: true,
        mix: 'field--search messages-board__search'
    });
    const chatCards = [
        new ChatCard({
            imageHref: 'assets/images/avatar.jpg',
            imageAlt: 'avatar',
            name: 'Андрей',
            text: 'Изображение',
            fulltime: '2020-10-10 10:49',
            time: '10:49',
            unread: 2,
        }),
        new ChatCard({
            imageHref: 'assets/images/avatar2.jpg',
            imageAlt: 'avatar',
            name: 'Киноклуб',
            text: '<span>Вы: </span>стикер',
            fulltime: '2020-10-10 12:00',
            time: '12:00',
        }),
        new ChatCard({
            imageHref: 'assets/images/avatar3.jpg',
            imageAlt: 'avatar',
            name: 'Илья',
            text: 'Друзья, у меня для вас особенный выпуск новостей!...',
            fulltime: '2020-10-10 15:12',
            time: '15:12',
            unread: 2,
        }),
        new ChatCard({
            imageHref: 'assets/images/avatar4.jpg',
            imageAlt: 'avatar',
            name: 'Вадим',
            text: '<span>Вы: </span>Круто!',
            fulltime: '2020-10-11 00:00',
            time: '00:00',
        }),
        new ChatCard({
            imageHref: 'assets/images/avatar5.jpg',
            imageAlt: 'avatar',
            name: 'тет-а-теты',
            text: 'И Human Interface Guidelines и Material Design рекомендуют...',
            fulltime: '2020-10-11 00:00',
            time: '00:00',
        }),
        new ChatCard({
            imageHref: 'assets/images/avatar6.jpg',
            imageAlt: 'avatar',
            name: '1,2,3',
            text: 'Миллионы россиян ежедневно проводят десятки часов свое...',
            fulltime: '2020-10-11 00:00',
            time: '00:00',
        }),
        new ChatCard({
            imageHref: 'assets/images/avatar7.jpg',
            imageAlt: 'avatar',
            name: 'Design Destroyer',
            text: 'В 2008 году художник Jon Rafman  начал собирать...',
            fulltime: '2020-10-11 00:00',
            time: '00:00',
        }),
        new ChatCard({
            imageHref: 'assets/images/avatar8.jpg',
            imageAlt: 'avatar',
            name: 'Day.',
            text: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
            fulltime: '2020-10-11 00:00',
            time: '00:00',
        }),
        new ChatCard({
            imageHref: 'assets/images/avatar9.jpg',
            imageAlt: 'avatar',
            name: 'Стас Рогозин',
            text: 'Можно или сегодня или завтра вечером.',
            fulltime: '2020-10-11 00:00',
            time: '00:00',
        }),
        new ChatCard({
            imageHref: 'assets/images/avatar10.jpg',
            imageAlt: 'avatar',
            name: 'Прохвост',
            text: 'Беги, скотина, я тебя найду!',
            fulltime: '2020-10-11 00:00',
            time: '00:00',
        }),
        new ChatCard({
            imageHref: 'assets/images/avatar.jpg',
            imageAlt: 'avatar',
            name: 'Андрей',
            text: 'Изображение',
            fulltime: '2020-10-10 10:49',
            time: '10:49',
            unread: 2,
        }),
        new ChatCard({
            imageHref: 'assets/images/avatar2.jpg',
            imageAlt: 'avatar',
            name: 'Киноклуб',
            text: '<span>Вы: </span>стикер',
            fulltime: '2020-10-10 12:00',
            time: '12:00',
        }),
        new ChatCard({
            imageHref: 'assets/images/avatar3.jpg',
            imageAlt: 'avatar',
            name: 'Илья',
            text: 'Друзья, у меня для вас особенный выпуск новостей!...',
            fulltime: '2020-10-10 15:12',
            time: '15:12',
            unread: 2,
        }),
        new ChatCard({
            imageHref: 'assets/images/avatar4.jpg',
            imageAlt: 'avatar',
            name: 'Вадим',
            text: '<span>Вы: </span>Круто!',
            fulltime: '2020-10-11 00:00',
            time: '00:00',
        }),
        new ChatCard({
            imageHref: 'assets/images/avatar5.jpg',
            imageAlt: 'avatar',
            name: 'тет-а-теты',
            text: 'И Human Interface Guidelines и Material Design рекомендуют...',
            fulltime: '2020-10-11 00:00',
            time: '00:00',
        }),
        new ChatCard({
            imageHref: 'assets/images/avatar6.jpg',
            imageAlt: 'avatar',
            name: '1,2,3',
            text: 'Миллионы россиян ежедневно проводят десятки часов свое...',
            fulltime: '2020-10-11 00:00',
            time: '00:00',
        }),
        new ChatCard({
            imageHref: 'assets/images/avatar7.jpg',
            imageAlt: 'avatar',
            name: 'Design Destroyer',
            text: 'В 2008 году художник Jon Rafman  начал собирать...',
            fulltime: '2020-10-11 00:00',
            time: '00:00',
        }),
        new ChatCard({
            imageHref: 'assets/images/avatar8.jpg',
            imageAlt: 'avatar',
            name: 'Day.',
            text: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
            fulltime: '2020-10-11 00:00',
            time: '00:00',
        }),
        new ChatCard({
            imageHref: 'assets/images/avatar9.jpg',
            imageAlt: 'avatar',
            name: 'Стас Рогозин',
            text: 'Можно или сегодня или завтра вечером.',
            fulltime: '2020-10-11 00:00',
            time: '00:00',
        }),
        new ChatCard({
            imageHref: 'assets/images/avatar10.jpg',
            imageAlt: 'avatar',
            name: 'Прохвост',
            text: 'Беги, скотина, я тебя найду!',
            fulltime: '2020-10-11 00:00',
            time: '00:00',
        })
    ];
    const messageList = new MessagesList({
        chatCardInstances: chatCards
    });
    const messageBoard = new MessagesBoard({
        linkText: "Профиль",
        linkHref: "/profile.html",
        messagesListInstance: messageList,
        searchFieldInstance: searchField
    });
    const topTooltip = new Tooltip({
        mix: 'tooltip--top-right',
        iconButtons: [
            {
                name: 'Переименовать',
                svg: '<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="22" height="1.5" transform="matrix(1 0 0 -1 0 19)" fill="#40375C" /><path fill-rule="evenodd" clip-rule="evenodd" d="M16.2602 0L19.0001 2.73982L16.9452 4.79468L14.2054 2.05487L16.2602 0ZM13.5202 2.73976L16.26 5.47958L6.7394 15.0002H4V12.26L13.5202 2.73976Z" fill="#40375C" />/svg>'
            },
            {
                name: 'Удалить',
                svg: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="10.25" stroke="#40375C" stroke-width="1.5" /></svg>'
            }
        ]
    });
    const bottomTooltip = new Tooltip({
        mix: 'tooltip--bottom-left',
        iconButtons: [
            {
                name: 'Фото или видео',
                svg: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V14L14.5194 12.4052C13.5108 12.1362 12.4714 12 11.4275 12H10.5725C9.52864 12 8.48921 12.1362 7.48057 12.4052L1.5 14V4C1.5 2.61929 2.61929 1.5 4 1.5ZM0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4ZM8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z" fill="#40375C" /></svg>'
            },
            {
                name: 'Файл',
                svg: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V12H16C13.7909 12 12 13.7909 12 16V20.5H4C2.61929 20.5 1.5 19.3807 1.5 18V4C1.5 2.61929 2.61929 1.5 4 1.5ZM12 22H4C1.79086 22 0 20.2091 0 18V4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V12V18C22 20.2091 20.2091 22 18 22H12Z" fill="#40375C" /> </svg>'
            },
            {
                name: 'Локация',
                svg: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 11C20.5 16.2467 16.2467 20.5 11 20.5C5.75329 20.5 1.5 16.2467 1.5 11C1.5 5.75329 5.75329 1.5 11 1.5C16.2467 1.5 20.5 5.75329 20.5 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z" fill="#40375C" /> </svg>'
            }
        ]
    });
    const renameForm = new RenameForm({
        mix: ''
    });
    const currentChat = new CurrentChat({
        imageLink: 'assets/images/avatar.jpg',
        imageAlt: 'avatar',
        name: 'Вадим',
        time: 'Был 5 минут назад',
        mix: 'messenger__current-chat',
        tooltipInstance: topTooltip,
        renameFormInstance: renameForm
    });
    // TODO
    // Пока контент сообщений захардхожен, в дальнейшем надо сделать отдельный комопонент,
    // который будет прогонять код через шаблонизатор
    const chat = new Chat({
        mix: "messenger__chat",
        chatGroups: [
            {
                date: '19 июля',
                chats: [
                    {
                        content: '<p>Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. </p><p>Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.</p>',
                        time: '11:56'
                    },
                    {
                        content: '<img class="chat__image" alt="dialog-image" src="assets/images/dialog-image.jpg" />',
                        mix: 'chat__dialog--image',
                        time: '11:56'
                    },
                    {
                        content: '<p>Круто</p>',
                        mix: '--me',
                        read: true,
                        time: '11:56'
                    }
                ]
            },
            {
                date: '20 июля',
                chats: [
                    {
                        content: '<p>Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. </p><p>Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.</p>',
                        time: '11:56'
                    },
                    {
                        content: '<img class="chat__image" alt="dialog-image" src="assets/images/dialog-image.jpg" />',
                        mix: 'chat__dialog--image',
                        time: '11:56'
                    },
                    {
                        content: '<p>Круто</p>',
                        mix: '--me',
                        read: true,
                        time: '11:56'
                    }
                ]
            }
        ]
    });
    const sender = new Sender({
        tooltipInstance: bottomTooltip
    });
    const messenger = new Messenger({
        messagesBoardInstance: messageBoard,
        currentChatInstance: currentChat,
        chatInstance: chat,
        senderInstance: sender
    });
    const modal = new Modal({
        title: 'Вы хотите удалить чат',
        deleteButtonInstance: new Button({
            text: 'Удалить',
            mix: 'button--red modal__button',
            type: 'button'
        }),
        cancelButtonInstance: new Button({
            text: 'Отмена',
            mix: 'button--grey modal__button',
            type: 'button'
        })
    });
    if (root) {
        root.appendChild(messenger.getContent());
        root.appendChild(modal.getContent());
        sender.hydrate();
        if (type === 'modal')
            modal.show();
        if (type === 'tooltips') {
            topTooltip.hydrate();
            bottomTooltip.hydrate();
            topTooltip.show();
            bottomTooltip.show();
        }
        if (type === 'rename') {
            renameForm.hydrate();
            renameForm.show();
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    messengerRender(window.messengerType);
});
export default messengerRender;
//# sourceMappingURL=messenger.js.map