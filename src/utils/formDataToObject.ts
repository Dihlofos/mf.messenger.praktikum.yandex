export default function formDataToObject(form: HTMLFormElement) {
  const result: { [key: string]: FormDataEntryValue } = {};
  if (form) {
    const formData: FormData = new FormData(form);
    for (const [key, value] of formData.entries()) {
      result[key] = value;
    }
  }
  return result;
}
