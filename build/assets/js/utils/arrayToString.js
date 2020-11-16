import { flattenObject } from './flattenObject.js';
export const arrayToString = function (key, obj) {
    const arr = [];
    obj.map((item, index) => {
        if (typeof item !== 'object') {
            arr.push(`${key}[${index}]=${item}`);
        }
        else {
            arr.push(`${key}[${index}]${flattenObject(item)}`);
        }
    });
    return arr.join('&');
};
//# sourceMappingURL=arrayToString.js.map