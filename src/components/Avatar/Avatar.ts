import { Block } from '../../modules/Block.js';

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
    const template = `
      <input class="avatar__input js-avatar-input" id="{{name}}" name="{{name}}" type="file" />
      <label class="avatar__image" for="avatar">
        <img class="js-avatar-image" width="176" height="176" src="{{imageLink}}" alt="{{name}}" />
      </label>
    `;
    return Handlebars.compile(template)(this.props);
  }
}
