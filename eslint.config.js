// eslint.config.js
import eslint from "@eslint/js";
import jest from "eslint-plugin-jest";
import prettier from "eslint-config-prettier";
import next from "eslint-config-next";

export default [
  eslint.configs.recommended,
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
