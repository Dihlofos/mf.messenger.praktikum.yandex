export const ProfileFieldTemplate = `
  {{#if nameField}}
    <input
    class="profile-field__input profile-field__input--name"
    id="{{name}}"
    type="{{type}}"
    name="{{name}}"
    value="{{value}}">
  {{^}}
    <input
      class="profile-field__input"
      id="{{name}}"
      type="{{type}}"
      name="{{name}}"
      value="{{value}}"
      placeholder="{{placeholder}}">
    <label class="profile-field__label"
      for="{{name}}">{{label}}</label>
  {{/if}}
  <span class="profile-field__error js-error">{{error}}</span>
`;
