import { Block } from '../../modules/Block.js';
export class Avatar extends Block {
    constructor(props) {
        super('div', 'avatar', props);
        this._instances.push(this);
    }
    componentDidMount() {
        setTimeout(() => {
            this.hydrate();
        }, 0);
    }
    initEvents() {
        let input = document.querySelector('.js-avatar-input');
        input === null || input === void 0 ? void 0 : input.addEventListener('change', this.onChange);
    }
    onChange(event) {
        var _a;
        let target = event.target;
        let image = document.querySelector('.js-avatar-image');
        if (!!((_a = target === null || target === void 0 ? void 0 : target.files) === null || _a === void 0 ? void 0 : _a.length)) {
            const newImageUrl = URL.createObjectURL(target.files[0]);
            if (image) {
                image.src = newImageUrl;
            }
        }
    }
    render() {
        const Handlebars = window.Handlebars;
        const template = `
      <input class="avatar__input js-avatar-input" id="{{name}}" name="{{name}}" type="file" />
      <label class="avatar__image" for="avatar">
        <img class="js-avatar-image" width="176" height="176" src="{{imageLink}}" alt="{{name}}" />
      </label>
    `;
        return Handlebars.compile(template)(this.props);
    }
}
//# sourceMappingURL=Avatar.js.map