import { Block } from '../../modules/Block.js';
import { ProfileShowTemplate } from './ProfileShow.template.js';
export class ProfileShow extends Block {
    constructor(props) {
        super('div', 'profile__form', props);
    }
    render() {
        const Handlebars = window.Handlebars;
        return Handlebars.compile(ProfileShowTemplate)(Object.assign({}, this.props));
    }
}
//# sourceMappingURL=ProfileShow.js.map