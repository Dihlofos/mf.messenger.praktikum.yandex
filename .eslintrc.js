module.exports = {
  extends: [
    "airbnb-typescript/base",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  rules: {
    "no-underscore-dangle": 0,
    "@typescript-eslint/no-shadow": 0,
    "import/no-cycle": 0,
    "no-restricted-syntax": 0,
    "no-param-reassign": 0,
    "@typescript-eslint/naming-convention": 0,
    "class-methods-use-this": 0,
    "@typescript-eslint/lines-between-class-members": 0,
    "func-names": 0,
    "no-prototype-builtins": 0,
    "consistent-return": 0,
    "no-console": 0,
  },
  ignorePatterns: [".eslintrc.js", ".stylelintrc.js", "*.test.ts", "*.mock.ts"],
};
