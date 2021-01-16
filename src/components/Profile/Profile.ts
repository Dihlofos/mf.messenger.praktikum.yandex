import { Block } from '../../modules';
import { ProfileShow } from '../ProfileShow/ProfileShow';
import { ProfileForm } from '../ProfileForm/ProfileForm';
import template from './Profile.handlebars';

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
    if (this.props) {
      this.content = this.props.contentInstance.renderToString();
    }

    return template({
      ...this.props,
      content: this.content,
    });
  }
}
