import { Error } from '../../components/Error/Error.js';
function errorPage() {
    const root = document.querySelector(".root");
    const errorContent = new Error({
        errorText: "500",
        errorDescription: "Мы уже фиксим",
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
//# sourceMappingURL=500.js.map