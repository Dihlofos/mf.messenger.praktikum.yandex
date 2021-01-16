module.exports = {
  extends: "stylelint-config-sass-guidelines",
  rules: {
    indentation: null,
    "number-leading-zero": null,
    "max-nesting-depth": 5,
    "selector-no-qualifying-type": null,
    "selector-pseudo-element-no-unknown": null,
    "scss/at-mixin-pattern": null,
    "declaration-property-value-disallowed-list": null,
    "selector-class-pattern": null,
  },
  ignoreFiles: ["dist/*"],
};
