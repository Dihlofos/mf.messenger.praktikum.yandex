import { ButtonProps } from '../../components/Button/Button.js';
import { ChatProps } from '../../components/Chat/Chat.js';
import { ChatCardProps } from '../../components/ChatCard/ChatCard.js';
import { CurrentChatProps } from '../../components/CurrentChat/CurrentChat.js';
import { FieldProps } from '../../components/Field/Field.js';
import { TooltipProps } from '../../components/Tooltip/Tooltip.js';
export declare type messengerDataProps = {
    searchFieldData: FieldProps;
    chatCardsData: ChatCardProps[];
    bottomtooltipData: TooltipProps;
    chatData: ChatProps | null;
    chatCreateModalButtonData: ButtonProps;
    currentChat?: CurrentChatProps;
};
export declare const messengerData: messengerDataProps;
