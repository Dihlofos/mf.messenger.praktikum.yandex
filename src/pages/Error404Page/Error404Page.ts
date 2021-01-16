import { Block } from '../../modules';
import { Error } from '../../components/Error/Error';
import error404Data from './data';

export class Error404Page extends Block {
  constructor() {
    super('div', 'page');
  }

  render() {
    const errorContent = new Error(error404Data);
    document.title = '404';
    return errorContent.renderToString();
  }
}

export default Error404Page;
