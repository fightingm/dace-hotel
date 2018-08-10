module.exports = {
  extends: ['eslint-config-qunar'].map(require.resolve),
  rules: {
    'object-curly-newline': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/require-default-props': 0,
    'react/jsx-no-bind': 0
  }
};