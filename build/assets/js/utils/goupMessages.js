import { dateDiffInDays } from "./diffDataInDays";
export function groupMessages(messages) {
    if (!messages)
        return null;
    const result = [];
    const today = new Date();
    console.log(today);
    messages.forEach((item) => {
        const day = new Date(item.time);
        console.log('diff', dateDiffInDays(day, today));
        console.log(item);
    });
    return result;
}
//# sourceMappingURL=goupMessages.js.map