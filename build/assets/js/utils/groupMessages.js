import { Store } from "../modules/Store.js";
export function groupMessages(messages) {
    if (!messages || !(messages === null || messages === void 0 ? void 0 : messages.length))
        return null;
    const store = new Store();
    const result = {};
    //Сортируем только один раз, при получении старых сообщений, более изящного решения не придумал
    // Так как при получении старых сообщений и при получении новых не нашел флага, за который можно схватиться
    if (messages[0].id === 1) {
        messages.sort((a, b) => (b.id - a.id));
    }
    messages.forEach((item) => {
        if ((item === null || item === void 0 ? void 0 : item.type) && (item === null || item === void 0 ? void 0 : item.type) !== 'message')
            return;
        const day = new Date(item.time);
        let mix = '';
        const stringDay = `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`;
        if (!result[stringDay])
            result[stringDay] = {
                date: day.toLocaleDateString('ru-RU'),
                messages: []
            };
        //Хак, потому что при получении нвого сообщения прилетает userId вместо user_id
        if (!item.user_id && item.userId)
            item.user_id = item.userId;
        if (store.get('userId') === item.user_id)
            mix = '--me';
        result[stringDay].messages.push(Object.assign(Object.assign({}, item), { time: new Date(item.time).toLocaleString('ru-RU'), mix }));
    });
    return Object.entries(result).map(([_, value]) => (value));
}
//# sourceMappingURL=groupMessages.js.map