export const FormTemplate = `
  <div class="form">
    <h1 class="form__title">{{title}}</h1>
    <form class="form__form js-form" method="POST" data-action={{action}}>
        <div class="form__fields">
            {{#each fields}}
                {{{this}}}
            {{/each}}
        </div>
        <div class="form__buttons">
          <div class="form__error">{{error}}</div>
            {{{button}}}
            <a class="form__link" href="{{linkHref}}">{{linkText}}</a>
        </div>
    </form>
  </div>`;
