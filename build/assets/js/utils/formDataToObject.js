export function formDataToObject(form) {
    let result = {};
    if (form) {
        const formData = new FormData(form);
        for (let pair of formData.entries()) {
            result[pair[0]] = pair[1];
        }
    }
    return result;
}
//# sourceMappingURL=formDataToObject.js.map