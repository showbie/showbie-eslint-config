/**
 * Ember-specific rules.
 */
module.exports = {
  env: {
    browser: true,
  },
  extends: ['plugin:ember/recommended'],
  rules: {
    'ember/no-empty-attrs': 'error',
    'ember/no-observers': 'error',
    'ember/order-in-components': 'error',
    'ember/order-in-controllers': 'error',
    'ember/order-in-models': 'error',
    'ember/order-in-routes': 'error',
    'ember/use-ember-get-and-set': 'error',
  },
  overrides: [
    // test files; ignore the ember-get rule
    {
      files: ['tests/**/*.js'],
      rules: { 'ember/use-ember-get-and-set': 'off' },
    },
  ],
};
