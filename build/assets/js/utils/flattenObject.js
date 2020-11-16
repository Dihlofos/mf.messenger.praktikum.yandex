export const flattenObject = function (obj) {
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
};
//# sourceMappingURL=flattenObject.js.map