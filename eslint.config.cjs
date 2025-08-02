// eslint.config.cjs
const js = require("@eslint/js");
const prettier = require("eslint-config-prettier");
const next = require("eslint-config-next");
const jest = require("eslint-plugin-jest");

module.exports = [
  js.configs.recommended,
  next["core-web-vitals"],
  {
    plugins: {
      jest,
    },
    rules: {
      ...jest.configs.recommended.rules,
    },
  },
  prettier,
];
