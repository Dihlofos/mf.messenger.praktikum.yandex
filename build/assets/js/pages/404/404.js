import { Error } from '../../components/Error/Error.js';
import { error404Data } from './data.js';
function errorPage() {
    const root = document.querySelector('.root');
    const errorContent = new Error(error404Data);
    if (root) {
        root.appendChild(errorContent.getContent());
    }
}
document.addEventListener('DOMContentLoaded', function () {
    errorPage();
});
export default errorPage;
//# sourceMappingURL=404.js.map