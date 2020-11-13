import { Block } from '../../modules/Block.js';
import { Error } from '../../components/Error/Error.js';
import { error404Data } from './data.js';
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
// function errorPage(): void {
//   const root: HTMLElement | null = document.querySelector('.root');
//   const errorContent = new Error(error404Data);
//   if (root) {
//     root.appendChild(errorContent.getContent());
//   }
// }
// document.addEventListener('DOMContentLoaded', function () {
//   errorPage();
// });
// export default errorPage;
//# sourceMappingURL=Error404Page.js.map