/**
 * Ember-specific rules.
 */
module.exports = {
  env: {
    browser: true,
  },
  extends: ['plugin:ember/recommended'],
  rules: {
    'ember/no-empty-attrs': 'warn',
    'ember/no-observers': 'warn',
    'ember/use-ember-get-and-set': 'warn',

    'ember/order-in-components': 'error',
    'ember/order-in-controllers': 'error',
    'ember/order-in-models': 'error',
    'ember/order-in-routes': 'error',
  },
};
