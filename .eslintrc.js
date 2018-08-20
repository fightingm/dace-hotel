module.exports = {
  extends: ['eslint-config-qunar'].map(require.resolve),
  rules: {
    'object-curly-newline': 0,
    'func-names': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/require-default-props': 0,
    'react/jsx-no-bind': 0,
    'react/default-props-match-prop-types': 0,
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'react/no-array-index-key': 0,
    'no-unused-expressions': 0,
    'max-len': 0,
    'import/no-mutable-exports': 0,
    'vars-on-top': 0
  }
};
