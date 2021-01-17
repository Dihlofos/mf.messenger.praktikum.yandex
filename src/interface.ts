export type CallbackFn = (...args: any[]) => void;
export type SimpleObject = { [key: string]: any };
export type StringIndexed = Record<string, unknown>;

export type UserItemProps = {
  avatar: string;
  display_name: string;
  email: string;
  first_name: string;
  id: number;
  login: string;
  phone: string;
  second_name: string;
};

export type Message = {
  user_id: number;
  userId?: number;
  chat_id: number;
  content: string;
  time: string;
  id: number;
  userName?: string;
  mix?: string;
  type?: string;
}

export type MessageSubmit = {
  content: string;
  type: string;
}

export type groupMessage = {
  date: string;
  messages: Message[]

}

export type groupMessagesResult = groupMessage[];

declare global {
  interface Window {
    Handlebars: any;
    messengerType: 'default' | 'tooltips' | 'modal' | 'rename';
  }
}
