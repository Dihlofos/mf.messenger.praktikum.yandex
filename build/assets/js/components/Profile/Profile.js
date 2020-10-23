import { Block } from "../../modules/Block.js";
export class Profile extends Block {
    constructor(props) {
        super("div", 'profile', props);
    }
    render() {
        const Handlebars = window.Handlebars;
        if (this.props) {
            this.content = this.props.contentInstance.renderToString();
        }
        const template = `
        <aside class="profile__aside">
          <a class="profile__back-link" href="{{backlink}}">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="14" fill="#40375C" />
              <rect x="8" y="13.2" width="11" height="1.6" fill="white" />
              <path d="M15 9L19 14L15 19" stroke="white" stroke-width="1.6" />
            </svg>
          </a>
        </aside>
        <main class="profile__content">
          {{{content}}}
        </main>
      `;
        return Handlebars.compile(template)(Object.assign(Object.assign({}, this.props), { content: this.content }));
    }
}
//# sourceMappingURL=Profile.js.map