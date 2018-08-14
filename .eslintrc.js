module.exports = {
  extends: ['eslint-config-qunar'].map(require.resolve),
  rules: {
    'object-curly-newline': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/require-default-props': 0,
    'react/jsx-no-bind': 0,
    'react/default-props-match-prop-types': 0,
    'one-var': 0,
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0
  }
};