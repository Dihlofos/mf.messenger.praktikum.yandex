import { ErrorContent } from '../../modules/errorContent.js';

function errorPage():void {
  const root: HTMLElement | null = document.querySelector(".root");

  const errorContent = new ErrorContent({
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
