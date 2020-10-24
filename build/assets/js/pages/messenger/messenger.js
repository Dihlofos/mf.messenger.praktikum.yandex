import { Button } from '../../components/Button/Button.js';
import { Chat } from '../../components/Chat/Chat.js';
import { ChatCard } from '../../components/ChatCard/ChatCard.js';
import { CurrentChat } from '../../components/CurrentChat/CurrentChat.js';
import { Field } from '../../components/Field/Field.js';
import { MessagesBoard } from '../../components/MessagesBoard/MessagesBoard.js';
import { MessagesList } from '../../components/MessagesList/MessagesList.js';
import { Messenger } from '../../components/Messenger/Messenger.js';
import { Modal } from '../../components/Modal/Modal.js';
import { RenameForm } from '../../components/RenameForm/RenameForm.js';
import { Sender } from '../../components/Sender/Sender.js';
import { Tooltip } from '../../components/Tooltip/Tooltip.js';
import { messengerData } from './data.js';
// TODO убрать type
// type - Временная вещь, чтобы сгенрировать разные статичные страницы
// Так как разница между разными статичными страница минимальна
// В дальнейшем, само собой это уйдет
function messengerRender(type) {
    const root = document.querySelector('.root');
    const { searchFieldData, chatCardsData, toptooltipData, bottomtooltipData, renameFormData, chatData, } = messengerData;
    const searchField = new Field(searchFieldData);
    const chatCards = chatCardsData.map((item) => new ChatCard(item));
    const messageList = new MessagesList({
        chatCardInstances: chatCards,
    });
    const messageBoard = new MessagesBoard({
        linkText: 'Профиль',
        linkHref: '/profile.html',
        messagesListInstance: messageList,
        searchFieldInstance: searchField,
    });
    const topTooltip = new Tooltip(toptooltipData);
    const bottomTooltip = new Tooltip(bottomtooltipData);
    const renameForm = new RenameForm(renameFormData);
    const currentChat = new CurrentChat({
        imageLink: 'assets/images/avatar.jpg',
        imageAlt: 'avatar',
        name: 'Вадим',
        time: 'Был 5 минут назад',
        mix: 'messenger__current-chat',
        tooltipInstance: topTooltip,
        renameFormInstance: renameForm,
    });
    // TODO
    // Пока контент сообщений захардхожен, в дальнейшем надо сделать отдельный комопонент,
    // который будет прогонять код через шаблонизатор
    const chat = new Chat(chatData);
    const sender = new Sender({
        tooltipInstance: bottomTooltip,
    });
    const messenger = new Messenger({
        messagesBoardInstance: messageBoard,
        currentChatInstance: currentChat,
        chatInstance: chat,
        senderInstance: sender,
    });
    const modal = new Modal({
        title: 'Вы хотите удалить чат',
        deleteButtonInstance: new Button({
            text: 'Удалить',
            mix: 'button--red modal__button',
            type: 'button',
        }),
        cancelButtonInstance: new Button({
            text: 'Отмена',
            mix: 'button--grey modal__button',
            type: 'button',
        }),
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
document.addEventListener('DOMContentLoaded', function () {
    messengerRender(window.messengerType);
});
export default messengerRender;
//# sourceMappingURL=messenger.js.map