// Wait submit event to input
// Returns nothing
function formConsole(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  let result = {};

  for (var pair of formData.entries()) {
    result[pair[0]] = pair[1];
  }
  console.log(result);
}

// Wait for input selector to input ( string - .js-*)
// Add 'is-value' class if input has value in it
// Returns nothing
function fieldsIsValueClassAdding(selector) {
  const fields = document.querySelectorAll(selector);

  fields.forEach((field) => {
    const inputField = field.querySelector('input');
    addIsValueClassToFields(inputField);

    inputField.addEventListener('blur', function (event) {
      if (event && event.target) addIsValueClassToFields(event.target);
    });
  });

  // Wait for node to input
  // toggle class whether input has value or not
  // Returns nothing
  function addIsValueClassToFields(inputField) {
    if (inputField.value.length) {
      inputField.classList.add('is-value');
    } else {
      inputField.classList.remove('is-value');
    }
  }
}

// Wait for input selector to input ( string - .js-*)
// Add Event listener on form submit
// Returns nothing
function initFormConsole(selector) {
  document.querySelectorAll(selector).forEach((form) => {
    form.addEventListener('submit', (event) => {
      formConsole(event);
    });
  });
}

document.addEventListener('DOMContentLoaded', function (event) {
  fieldsIsValueClassAdding('.js-field');

  initFormConsole('.js-form');
});
