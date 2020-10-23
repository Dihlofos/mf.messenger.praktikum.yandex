import { Button } from "../../components/Button/Button.js";
import { ChatCard } from "../../components/ChatCard/ChatCard.js";
import { Field } from "../../components/Field/Field.js";
import { MessagesBoard } from "../../components/MessagesBoard/MessagesBoard.js";
import { MessagesList } from "../../components/MessagesList/MessagesList.js";
import { Messenger } from "../../components/Messenger/Messenger.js";
import { Modal } from "../../components/Modal/Modal.js";
function messageEmptyRender() {
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
    const messenger = new Messenger({
        messagesBoardInstance: messageBoard
    });
    const modal = new Modal({
        title: 'Вы хотите удалить чат',
        deleteButtonInstance: new Button({
            text: 'Удалить',
            mix: 'button--red delete-dialog__button',
            type: 'button'
        }),
        cancelButtonInstance: new Button({
            text: 'Отмена',
            mix: 'button--grey delete-dialog__button',
            type: 'button'
        })
    });
    if (root) {
        root.appendChild(messenger.getContent());
        root.appendChild(modal.getContent());
    }
}
document.addEventListener("DOMContentLoaded", function () {
    messageEmptyRender();
});
export default messageEmptyRender;
//# sourceMappingURL=messengerEmpty.js.map