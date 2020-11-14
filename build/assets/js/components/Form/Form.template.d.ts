export declare const FormTemplate = "\n  <div class=\"form\">\n    <h1 class=\"form__title\">{{title}}</h1>\n    <form class=\"form__form js-form\" method=\"POST\" data-action={{action}}>\n        <div class=\"form__fields\">\n            {{#each fields}}\n                {{{this}}}\n            {{/each}}\n        </div>\n        <div class=\"form__buttons\">\n          <div class=\"form__error\">{{error}}</div>\n            {{{button}}}\n            <a class=\"form__link\" href=\"{{linkHref}}\">{{linkText}}</a>\n        </div>\n    </form>\n  </div>";
