import { Block } from '../../modules/Block.js';
import { ProfileShowTemplate } from './ProfileShow.template.js';

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
    const Handlebars = window.Handlebars;
    return Handlebars.compile(ProfileShowTemplate)({ ...this.props });
  }
}
