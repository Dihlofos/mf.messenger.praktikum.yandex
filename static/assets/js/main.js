'use strict';

// Wait submit event to input
// Returns nothing
function formConsole(event) {
  event.preventDefault();
  var formData = new FormData(event.target);
  var result = {};

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = formData.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var pair = _step.value;

      result[pair[0]] = pair[1];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.log(result);
}

// Wait for input selector to input ( string - .js-*)
// Add 'is-value' class if input has value in it
// Returns nothing
function fieldsIsValueClassAdding(selector) {
  var fields = document.querySelectorAll(selector);

  fields.forEach(function (field) {
    var inputField = field.querySelector('input');
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

document.addEventListener('DOMContentLoaded', function (event) {
  fieldsIsValueClassAdding('.js-field');
});
//# sourceMappingURL=main.js.map
