// Wait for input selector to input ( string - .js-*)
// Add 'is-value' class if input has value in it
// Returns nothing
export const fieldsIsValueClassAdding = (selector) => {
    const fields = document.querySelectorAll(selector);
    fields.forEach((field) => {
        const inputField = field.querySelector('input');
        if (inputField) {
            inputField === null || inputField === void 0 ? void 0 : inputField.classList.toggle('is-value', !!inputField.value.length);
        }
    });
};
//# sourceMappingURL=fieldsIsValueClassAdding.js.map