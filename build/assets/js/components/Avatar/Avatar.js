import { Block } from '../../modules/Block.js';
export class Avatar extends Block {
    constructor(props) {
        super("div", 'avatar', props);
        this._instances.push(this);
    }
    render() {
        const Handlebars = window.Handlebars;
        const template = `
      <input class="avatar__input" id="{{name}}" name="{{name}}" type="file" />
      <label class="avatar__image" for="avatar">
        <img width="176" height="176" src="{{imageLink}}" alt="{{name}}" />
      </label>
    `;
        return Handlebars.compile(template)(this.props);
    }
}
//# sourceMappingURL=Avatar.js.map