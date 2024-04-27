export const updateLocalStorageField = (localStorage, name, value, localStorageFieldsKey) => {
  const localStorageFormFields = localStorage.getItem(localStorageFieldsKey);
  const localStorageFormFieldsData = localStorageFormFields ? JSON.parse(localStorageFormFields) : {};

  if (localStorageFormFieldsData[name] === value) return;

  if (!value) {
    delete localStorageFormFieldsData[name];
  } else {
    localStorageFormFieldsData[name] = value;
  }

  if (Object.keys(localStorageFormFieldsData).length === 0) {
    localStorage.removeItem(localStorageFieldsKey);
  } else {
    localStorage.setItem(localStorageFieldsKey, JSON.stringify(localStorageFormFieldsData));
  }
}

export const areAllFieldsFilled = form => {
  const inputs = form.querySelectorAll('input, textarea');

  return !Array.from(inputs).some(element => element.value.trim() === '');
}