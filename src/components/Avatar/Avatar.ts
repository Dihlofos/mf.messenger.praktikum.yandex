import { Block } from '../../modules/Block.js';
import { AvatarTemplate } from './Avatar.template.js';

export type AvatarProps = {
  name: string;
  imageLink: string;
};

export class Avatar extends Block {
  constructor(props: AvatarProps) {
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
    input?.addEventListener('change', this.onChange);
  }

  onChange(event: Event) {
    let target = event.target as HTMLInputElement;
    let image: HTMLImageElement | null = document.querySelector(
      '.js-avatar-image'
    );
    if (!!target?.files?.length) {
      const newImageUrl = URL.createObjectURL(target.files[0]);
      if (image) {
        image.src = newImageUrl;
      }
    }
  }

  render() {
    const Handlebars = window.Handlebars;
    return Handlebars.compile(AvatarTemplate)(this.props);
  }
}
