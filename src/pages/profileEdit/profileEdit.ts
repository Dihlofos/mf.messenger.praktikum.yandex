import { Avatar } from "../../components/Avatar/Avatar.js";
import { Button } from "../../components/Button/Button.js";
import { Profile } from "../../components/Profile/Profile.js";
import { ProfileField } from "../../components/ProfileField/ProfileField.js";
import { ProfileForm } from "../../components/ProfileForm/ProfileForm.js";


function profilePage():void {
  const root: HTMLElement | null = document.querySelector(".root");

  const button = new Button({
    text: 'Сохранить',
    type: 'submit',
    mix: 'profile__submit-btn',
  })

  const fields = [
    new ProfileField({
      name: 'email',
      type: 'email',
      label: 'Почта',
      value: 'mail@inbox.com',
      placeholder: 'Введите почту'
    }),
    new ProfileField({
      name: 'login',
      type: 'text',
      label: 'Логин',
      value: 'username',
      placeholder: 'Введите логин'
    }),
    new ProfileField({
      name: 'first_name',
      type: 'text',
      label: 'Имя',
      value: '',
      placeholder: 'Введите имя'
    }),
    new ProfileField({
      name: 'second_name',
      type: 'text',
      label: 'Фамилия',
      value: '',
      placeholder: 'Введите фамилию'
    }),
    new ProfileField({
      name: 'phone',
      type: 'tel',
      label: 'Номер телефона',
      value: '',
      placeholder: 'Введите номер телефона'
    }),
    new ProfileField({
      name: 'oldPassword',
      type: 'password',
      label: 'Старый пароль',
      value: '',
      placeholder: 'Введите cтарый пароль'
    }),
    new ProfileField({
      name: 'newPassword',
      type: 'password',
      label: 'Новый пароль',
      value: '',
      placeholder: 'Введите новый пароль'
    })
  ]

  const avatar = new Avatar({
    name: 'avatar',
    imageLink: 'assets/images/avatar.jpg'
  })

  const name = new ProfileField({
    name: 'name',
    type: 'text',
    label: '',
    value: 'Евгений',
    nameField: true
  })

  const profileForm = new ProfileForm({
    nameInstance: name,
    avatarInstance: avatar,
    buttonInstance: button,
    fieldsInstances: fields
  })


  const profile = new Profile({
    backlink:'/messenger_default.html',
    backText: 'Выйти',
    contentInstance: profileForm,
  })


  if (root) {
    root.appendChild(profile.getContent());

    fields.forEach((item)=>{
      item.hydrate();
    })
    name.hydrate();
    profileForm.hydrate();
  }
}
document.addEventListener("DOMContentLoaded", function () {
  profilePage();

});

export default profilePage;
