export function formDataToObject(form: HTMLFormElement) {
  let result: { [key: string]: FormDataEntryValue } = {};
  if (form) {
    const formData: FormData = new FormData(form);
    for (let pair of formData.entries()) {
      result[pair[0]] = pair[1];
    }
  }
  return result;
}
