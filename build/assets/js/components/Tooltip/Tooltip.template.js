export const TooltipTemplate = `
  <ul class="icon-buttons">
      {{#each iconButtons}}
          <li class="icon-buttons__item">
              <button class="js-icon-button icon-buttons__btn js-focus-visible" data-target="{{target}}" type="button">
                  {{{svg}}}
                  <span>{{name}}</span>
              </button>
          </li>
      {{/each}}
  </ul>
`;
//# sourceMappingURL=Tooltip.template.js.map