import { arrayToString } from './arrayToString.js';
import { flattenObject } from './flattenObject.js';
export function queryStringify(data) {
    if (Object.keys(data).length === 0) {
        return '';
    }
    if (typeof data !== 'object')
        throw new Error('Это не объект!');
    let result = Object.entries(data).map(([key, value]) => {
        if (typeof value === 'object') {
            if (Array.isArray(value)) {
                return arrayToString(key, value);
            }
            return `${key}${flattenObject(value)}`;
        }
        return `${key}=${value}`;
    });
    return result.join('&');
}
//# sourceMappingURL=queryStringify.js.map