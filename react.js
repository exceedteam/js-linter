module.exports = {
  extends: [
    './index',
    './rules/react/react',
    './rules/react/react-a11y',
  ].map(require.resolve),
  rules: {}
};
