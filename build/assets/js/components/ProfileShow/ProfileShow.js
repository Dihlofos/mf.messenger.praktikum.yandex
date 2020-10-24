import { Block } from '../../modules/Block.js';
export class ProfileShow extends Block {
    constructor(props) {
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
        return Handlebars.compile(template)(Object.assign({}, this.props));
    }
}
//# sourceMappingURL=ProfileShow.js.map