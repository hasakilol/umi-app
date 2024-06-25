module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unsafe-finally': 'off',
    'require-yield': 'off',
  },
};
