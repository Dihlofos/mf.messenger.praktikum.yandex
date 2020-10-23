import { Button } from "../../components/Button/Button.js";
import { Field } from "../../components/Field/Field.js";
import { Form } from "../../components/Form/Form.js";
function registrationPageRender() {
    const root = document.querySelector(".root");
    const fields = [
        new Field({
            name: 'email',
            type: 'email',
            label: 'Почта',
            value: '',
            mix: 'form__field'
        }),
        new Field({
            name: 'login',
            type: 'text',
            label: 'Логин',
            value: '',
            mix: 'form__field'
        }),
        new Field({
            name: 'password',
            type: 'password',
            label: 'Пароль',
            value: '',
            mix: 'form__field'
        }),
        new Field({
            name: 'password_repeat',
            type: 'password',
            label: 'Пароль (еще раз)',
            value: '',
            mix: 'form__field'
        }),
        new Field({
            name: 'first_name',
            type: 'text',
            label: 'Имя',
            value: '',
            mix: 'form__field'
        }),
        new Field({
            name: 'second_name',
            type: 'text',
            label: 'Фамилия',
            value: '',
            mix: 'form__field'
        }),
        new Field({
            name: 'phone',
            type: 'text',
            label: 'Телефон',
            value: '',
            mix: 'form__field'
        })
    ];
    const button = new Button({
        text: 'Зарегистрироваться',
        mix: 'form__button',
        type: 'submit'
    });
    const form = new Form({
        title: 'Регистрация',
        fieldInstances: fields,
        buttonInstance: button,
        linkText: 'Войти',
        linkHref: '/login.html',
    });
    if (root) {
        root.appendChild(form.getContent());
        fields.forEach((item) => {
            item.hydrate();
        });
        button.hydrate();
        form.hydrate();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    registrationPageRender();
});
export default registrationPageRender;
//# sourceMappingURL=registration.js.map