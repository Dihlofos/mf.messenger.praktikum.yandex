export function transformApiResult(res) {
    let result;
    try {
        result = JSON.parse(res);
    }
    catch (e) {
        result = res;
    }
    return result;
}
//# sourceMappingURL=transformApiResult.js.map