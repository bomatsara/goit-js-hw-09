import * as formUtilities from './form/utilities.js';

const localStorageFieldsKey = 'feedback-form-state';

document.addEventListener('DOMContentLoaded', event => {
  const formEl = document.querySelector('form.feedback-form');

  if (!formEl) return;

  const localStorage = window.localStorage;
  let localStorageFormFields = localStorage.getItem(localStorageFieldsKey);

  if (localStorageFormFields) {
    localStorageFormFields = JSON.parse(localStorageFormFields);

    Object.keys(localStorageFormFields).forEach(key => {
      if (!formEl.elements[key]) return;

      formEl.elements[key].value = localStorageFormFields[key];
    });
  }

  formEl.addEventListener('input', event => {
    const currentElement = event.target;

    if (!currentElement.matches('input, textarea')) return;

    const currentElementName = currentElement.name;
    const currentElementValue = currentElement.value;

    formUtilities.updateLocalStorageField(localStorage, currentElementName, currentElementValue, localStorageFieldsKey);
  });

  formEl.addEventListener('submit', event => {
    event.preventDefault();

    if (!formUtilities.areAllFieldsFilled(formEl)) {
      alert('Fill please all fields');
      return;
    }

    localStorage.removeItem(localStorageFieldsKey);

    formEl.reset();
  });
});