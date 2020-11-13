import { Block } from '../../modules/Block.js';

export type ProfileShowProps = {
  display_name: string;
  backlink: string;
  backText: string;
  avatar: string;
  email: string;
  fields: Record<string, string>[];
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
          <img width="176" height="176" src="{{avatar}}" alt="{{display_name}}'s avatar" />
        </div>
        <p class="profile-field__input profile-field__input--name">{{display_name}}</p>

        <ul class="profile__field-list">
          <li class="profile__field-item">
            <div class="profile-field">
              <a href="mailto:{{email}}" class="profile-field__input">{{email}}</a>
              <p class="profile-field__label">Почта</p>
            </div>
          </li>
          {{#each fields}}
            <li class="profile__field-item">
              <div class="profile-field">
                <p class="profile-field__input">{{this.value}}</p>
                <p class="profile-field__label">{{this.label}}</p>
              </div>
            </li>
          {{/each}}

        </ul>
        <a class="profile__edit-link js-focus-visible" href="{{editLink}}">{{editLinkText}}</a>
        <a class="profile__exit-link js-focus-visible js-logout" href="{{backlink}}">{{backText}}</a>
      `;
    return Handlebars.compile(template)({ ...this.props });
  }
}
