import { Block } from '../../modules/Block.js';
import { ProfileShow } from '../ProfileShow/ProfileShow.js';
import { ProfileForm } from '../ProfileForm/ProfileForm.js';
import { ProfileTemplate } from './Profile.template.js';

export type ProfileProps = {
  backlink: string;
  backText: string;
  contentInstance: ProfileShow | ProfileForm;
};

export class Profile extends Block {
  content: string;
  constructor(props: ProfileProps) {
    super('div', 'light full-screen', props);
  }
  render() {
    const Handlebars = window.Handlebars;
    if (this.props) {
      this.content = this.props.contentInstance.renderToString();
    }

    return Handlebars.compile(ProfileTemplate)({
      ...this.props,
      content: this.content,
    });
  }
}
