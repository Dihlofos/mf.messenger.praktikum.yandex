import { Block } from '../../modules/Block.js';
import { Error } from '../../components/Error/Error.js';
import { error500Data } from './data.js';

export class Error500Page extends Block {
  constructor() {
    super('div', 'page');
  }

  render() {
    const errorContent = new Error(error500Data);
    document.title = '505';
    return errorContent.renderToString();
  }
}

export default Error500Page;
