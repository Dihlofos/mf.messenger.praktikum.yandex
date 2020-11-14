export declare const FieldTemplate = "\n  {{#if search}}\n    <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.5922 11.4138C10.1603 12.8457 7.83871 12.8457 6.40679 11.4138C4.97486 9.98187 4.97486 7.66027 6.40679 6.22834C7.83871 4.79642 10.1603 4.79642 11.5922 6.22834C13.0242 7.66027 13.0242 9.98187 11.5922 11.4138ZM12.0326 12.7968C10.0724 14.2961 7.25681 14.1494 5.46398 12.3566C3.51136 10.404 3.51136 7.23816 5.46398 5.28553C7.4166 3.33291 10.5824 3.33291 12.535 5.28553C14.3278 7.07828 14.4746 9.8937 12.9754 11.8539L16.5421 15.4206L15.5993 16.3634L12.0326 12.7968Z\" fill=\"#342D09\"/>\n    </svg>\n  {{/if}}\n    <input id=\"{{name}}\" type=\"{{type}}\" name=\"{{name}}\" value=\"{{value}}\">\n    <label for=\"{{name}}\">{{label}}</label>\n    <span class=\"field__error js-error\"></span>\n";