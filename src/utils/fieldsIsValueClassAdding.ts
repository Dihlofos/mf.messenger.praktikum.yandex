// Wait for input selector to input ( string - .js-*)
// Add 'is-value' class if input has value in it
// Returns nothing
export const fieldsIsValueClassAdding = (selector: string) => {
    const fields = document.querySelectorAll(selector);
    fields.forEach((field: HTMLElement) => {
      const inputField = field.querySelector('input');
      if (inputField) {
        inputField?.classList.toggle('is-value', !!inputField.value.length);
  
      }
      
    });
  }