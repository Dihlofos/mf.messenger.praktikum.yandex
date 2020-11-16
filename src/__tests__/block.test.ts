import { Block } from '../modules/Block';
import Handlebars from 'handlebars';

type TestProps = {
  text: string;
};

describe('Block components testing', () => {
  //"let" here is neccessary
  let blockWasMounted: boolean;
  class Test extends Block {
    constructor(props: TestProps) {
      super('div', '', props);
    }
    componentDidMount() {
      blockWasMounted = true;
    }

    hide(): void {
      this.element.classList.remove('is-shown');
    }
    render() {
      return Handlebars.compile(`<div class="button">{{text}}</div>`)(
        this.props
      );
    }
  }
  const testBlock = new Test({ text: 'Тестовый тест' });

  it('Block renders', () => {
    expect(testBlock.render()).toBe(`<div class="button">Тестовый тест</div>`);
  });

  it('ComponentDidNount was fired', () => {
    expect(blockWasMounted).toBe(true);
  });

  it('Block rerenders with new data', () => {
    testBlock.setProps({ text: 'Тестовый тест дважды' });
    expect(testBlock.render()).toBe(
      `<div class="button">Тестовый тест дважды</div>`
    );
  });
});
