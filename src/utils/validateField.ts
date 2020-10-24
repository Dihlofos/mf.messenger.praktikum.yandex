export function validateField(element: HTMLInputElement): string {
  const validationData = {
    password: {
      required: 'Введите пароль',
      length: 'Пароль должен быть длиной не менее 5ти символов',
      content: 'Недопустимые знаки в пароле',
    },
    email: {
      required: 'Введите E-mail',
      content: 'Недопустимый адрес',
    },
    login: {
      required: 'Придумайте логин',
      length: 'Логин должен быть длиной не менее 2х символов',
    },
    name: {
      required: 'Введите своё имя',
    },
  };
  if (element) {
    switch (element.type) {
      case 'password':
        if (element.value.length === 0) return validationData.password.required;
        if (element.value.length > 0 && element.value.length < 5)
          return validationData.password.length;
        if (element.value.match(/[^a-z0-9]/gi))
          return validationData.password.content;
        return '';
      case 'email':
        if (element.value.length === 0) return validationData.email.required;
        if (
          element.value.length > 0 &&
          !element.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        )
          return validationData.email.content;
        return '';
    }
    switch (element.name) {
      case 'login':
        if (element.value.length === 0) return validationData.login.required;
        if (element.value.length > 0 && element.value.length < 2)
          return validationData.login.length;
        return '';
      case 'name':
        if (element.value.length === 0) return validationData.name.required;
        return '';
      default:
        return '';
    }
  } else {
    return '';
  }
}
