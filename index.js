module.exports = {
  extends: [
    './rules/base/best-practices',
    './rules/base/errors',
    './rules/base/node',
    './rules/base/style',
    './rules/base/variables',
    './rules/base/es6',
    './rules/base/imports',
    './rules/base/strict',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
