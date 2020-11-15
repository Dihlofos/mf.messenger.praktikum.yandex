import { Block } from '../modules/Block';
import Handlebars from 'handlebars';

type TestProps = {
  text: string;
};

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
    return Handlebars.compile(`<div class="button">{{text}}</div>`)(this.props);
  }
}
let testBlock: Test;
let blockWasMounted: boolean;

function initTest() {
  blockWasMounted = false;
  testBlock = new Test({ text: 'Тестовый тест' });
}

beforeAll(() => {
  initTest();
});

test('Block renders', () => {
  expect(testBlock.render()).toBe(`<div class="button">Тестовый тест</div>`);
});

test('ComponentDidNount was fired', () => {
  expect(blockWasMounted).toBe(true);
});

test('Block rerenders with new data', () => {
  testBlock.setProps({ text: 'Тестовый тест дважды' });
  expect(testBlock.render()).toBe(
    `<div class="button">Тестовый тест дважды</div>`
  );
});
