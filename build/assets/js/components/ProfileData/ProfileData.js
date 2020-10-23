import { Block } from "../../modules/Block.js";
export class ProfileData extends Block {
    constructor(props) {
        super("div", 'profile__form', props);
    }
    render() {
        const Handlebars = window.Handlebars;
        const template = `
        <div class="profile__avatar">
          <img width="176" height="176" src="{{imageLink}}" alt="{{imageAlt}}" />
        </div>
        <p class="profile-field__input profile-field__input--name">{{name}}</p>

        <ul class="profile__field-list">
          <li class="profile-field">
            <a href="mailto:{{email}}" class="profile-field__input">{{email}}</a>
            <p class="profile-field__label">{{emailLabel}}</p>
          </li>
          <li class="profile-field">
            <p class="profile-field__input">{{login}}</p>
            <p class="profile-field__label">{{loginLabel}}</p>
          </li>
        </ul>
        <a class="profile__edit-link js-focus-visible" href="{{editLink}}">{{editLinkText}}</a>
        <a class="profile__exit-link js-focus-visible" href="{{backlink}}">{{backText}}</a>
      `;
        return Handlebars.compile(template)(Object.assign({}, this.props));
    }
}
//# sourceMappingURL=ProfileData.js.map