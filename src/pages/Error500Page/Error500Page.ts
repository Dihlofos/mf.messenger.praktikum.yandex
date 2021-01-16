import { Block } from '../../modules';
import { Error } from '../../components/Error/Error';
import error500Data from './data';

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
