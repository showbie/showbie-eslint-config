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

    'ember/order-in-components': 'warn',
    'ember/order-in-controllers': 'warn',
    'ember/order-in-models': 'warn',
    'ember/order-in-routes': 'warn',
  },
};
