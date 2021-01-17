import { groupMessage, groupMessagesResult, Message } from '../interface';
import { Store } from '../modules';

export default function groupMessages(messages: Message[] | null): groupMessagesResult | null {
  if (!messages || !messages?.length) return null;
  const store = new Store();
  const result: { [key: string]: groupMessage } = {};
  // Сортируем только один раз, при получении старых сообщений, более изящного решения не придумал
  // Так как при получении старых сообщений и при получении новых не нашел флага, за который можно схватиться
  if (messages[0].id === 1) {
    messages.sort((a, b) => (b.id - a.id));
  }
  messages.forEach((item) => {
    if (item?.type && item?.type !== 'message') return;
    const day = new Date(item.time);
    let mix = '';
    const stringDay = `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`;
    if (!result[stringDay]) {
      result[stringDay] = {
        date: day.toLocaleDateString('ru-RU'),
        messages: [],
      };
    }
    // Хак, потому что при получении нвого сообщения прилетает userId вместо user_id
    if (!item.user_id && item.userId) item.user_id = item.userId;
    // добавляем имена пользователей из стора
    item.userName = store.get('users')[item.user_id]
    // Помечаем собственные сообщения
    if (store.get('userId') === item.user_id) mix = '--me';
    result[stringDay].messages.push({ ...item, time: new Date(item.time).toLocaleString('ru-RU'), mix });
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return Object.entries(result).map(([_, value]) => (value));
}
