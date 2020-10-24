import { Block } from '../../modules/Block.js';

export type ProfileShowProps = {
  name: string;
  backlink: string;
  backText: string;
  imageLink: string;
  imageAlt: string;
  email: string;
  emailLabel: string;
  login: string;
  loginLabel: string;
  editLink: string;
  editLinkText: string;
};

export class ProfileShow extends Block {
  constructor(props: ProfileShowProps) {
    super('div', 'profile__form', props);
  }

  render() {
    const Handlebars = window.Handlebars;
    const template = `
        <div class="profile__avatar">
          <img width="176" height="176" src="{{imageLink}}" alt="{{imageAlt}}" />
        </div>
        <p class="profile-field__input profile-field__input--name">{{name}}</p>

        <ul class="profile__field-list">
          <li class="profile__field-item">
            <div class="profile-field">
              <a href="mailto:{{email}}" class="profile-field__input">{{email}}</a>
              <p class="profile-field__label">{{emailLabel}}</p>
            </div>
          </li>
          <li class="profile__field-item">
            <div class="profile-field">
              <p class="profile-field__input">{{login}}</p>
              <p class="profile-field__label">{{loginLabel}}</p>
            </div>
          </li>
        </ul>
        <a class="profile__edit-link js-focus-visible" href="{{editLink}}">{{editLinkText}}</a>
        <a class="profile__exit-link js-focus-visible" href="{{backlink}}">{{backText}}</a>
      `;
    return Handlebars.compile(template)({ ...this.props });
  }
}
