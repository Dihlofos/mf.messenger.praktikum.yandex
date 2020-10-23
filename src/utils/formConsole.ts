export function formConsole(form: HTMLFormElement) {
  let result:{[key:string]:FormDataEntryValue} = {};
  if (form) {
    const formData:FormData = new FormData(form);

    for (var pair of formData.entries()) {
      result[pair[0]] = pair[1];
    }
    console.log(result);
  }
}