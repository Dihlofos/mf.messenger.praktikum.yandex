import { ErrorContent } from '../../modules/errorContent.js';
function errorPage() {
    var root = document.querySelector(".root");
    var errorContent = new ErrorContent({
        errorText: "404",
        errorDescription: "Не туда попали",
        backText: "Назад к чатам",
        backLink: "/",
    });
    if (root) {
        root.appendChild(errorContent.getContent());
    }
}
document.addEventListener("DOMContentLoaded", function () {
    errorPage();
});
export default errorPage;
//# sourceMappingURL=404.js.map