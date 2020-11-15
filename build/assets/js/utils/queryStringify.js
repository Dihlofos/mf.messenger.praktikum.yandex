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
    function flattenObject(obj) {
        let result = [];
        rec(obj);
        function rec(obj) {
            return Object.keys(obj).map((key) => {
                if (typeof obj[key] === 'object') {
                    result.push(`[${key}]`);
                    rec(obj[key]);
                }
                else {
                    result.push(`[${key}]=${obj[key]}`);
                }
            });
        }
        return result.join('');
    }
    function arrayToString(key, obj) {
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
    }
    return result.join('&');
}
//# sourceMappingURL=queryStringify.js.map