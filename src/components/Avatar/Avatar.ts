import { Block } from '../../modules';
import template from './Avatar.handlebars';

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
    const input = document.querySelector('.js-avatar-input');
    input?.addEventListener('change', this.onChange);
  }

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const image: HTMLImageElement | null = document.querySelector(
      '.js-avatar-image',
    );
    if (target?.files?.length) {
      const newImageUrl = URL.createObjectURL(target.files[0]);
      if (image) {
        image.src = newImageUrl;
      }
    }
  }

  render() {
    return template(this.props);
  }
}
