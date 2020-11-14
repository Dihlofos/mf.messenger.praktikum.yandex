export declare const ProfileFormTemplate = "\n  <form class=\"profile__form js-form\" method=\"POST\">\n    {{{avatar}}}\n    {{{name}}}\n    <ul class=\"profile__field-list\">\n      {{#each fields}}\n        <li class=\"profile__field-item\">\n          {{{this}}}\n        </li>\n      {{/each}}\n    </ul>\n    <p class=\"profile__error\">{{error}}</p>\n    {{{button}}}\n  </form>\n";
