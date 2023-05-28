const OFF = 0;
const WARN = 1;
const ERROR = 2;

/** @type {import('@types/eslint').Linter.BaseConfig} */module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    '@next/next/no-html-link-for-pages': OFF,
		'@next/next/no-img-element': OFF,
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
