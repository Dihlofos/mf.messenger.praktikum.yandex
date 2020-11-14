import { Block } from '../../modules/Block.js';
import { ProfileTemplate } from './Profile.template.js';
export class Profile extends Block {
    constructor(props) {
        super('div', 'light full-screen', props);
    }
    render() {
        const Handlebars = window.Handlebars;
        if (this.props) {
            this.content = this.props.contentInstance.renderToString();
        }
        return Handlebars.compile(ProfileTemplate)(Object.assign(Object.assign({}, this.props), { content: this.content }));
    }
}
//# sourceMappingURL=Profile.js.map