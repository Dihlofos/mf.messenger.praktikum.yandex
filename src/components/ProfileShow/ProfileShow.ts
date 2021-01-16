import { Block } from '../../modules';
import template from './ProfileShow.handlebars';

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
    return template(this.props);
  }
}
