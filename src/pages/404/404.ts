import { Error } from '../../components/Error/Error.js';

function errorPage():void {
  const root: HTMLElement | null = document.querySelector(".root");

  const errorContent = new Error({
    errorText: "404",
    errorDescription: "Не туда попали",
    backText: "Назад к чатам",
    backLink: "/",
  })
  if (root) {
    root.appendChild(errorContent.getContent());
  }
}
document.addEventListener("DOMContentLoaded", function () {
  errorPage();
  
});

export default errorPage;
