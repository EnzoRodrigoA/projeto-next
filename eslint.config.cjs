// eslint.config.cjs
const js = require("@eslint/js");
const prettier = require("eslint-config-prettier");
const coreWebVitals = require("eslint-config-next/core-web-vitals");
const jest = require("eslint-plugin-jest");

module.exports = [
  js.configs.recommended,
  coreWebVitals,
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
