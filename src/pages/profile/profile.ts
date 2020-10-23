import { Profile } from "../../components/Profile/Profile.js";
import { ProfileData } from "../../components/ProfileData/ProfileData.js";


function profilePage():void {
  const root: HTMLElement | null = document.querySelector(".root");

  const profileData = new ProfileData({
    name: 'Евгений',
    backlink:'/messenger_default.html',
    backText: 'Выйти',
    imageLink: 'assets/images/avatar.jpg',
    imageAlt: 'avatar',
    email: 'mail@inbox.com',
    emailLabel: 'Почта',
    login: 'username',
    loginLabel: 'Логин',
    editLink: '/profile-edit.html',
    editLinkText: 'Изменить данные',
  })

  const profile = new Profile({
    backlink:'/messenger_default.html',
    backText: 'Выйти',
    contentInstance: profileData,
    })


  if (root) {
    root.appendChild(profile.getContent())
  }
}
document.addEventListener("DOMContentLoaded", function () {
  profilePage();

});

export default profilePage;
