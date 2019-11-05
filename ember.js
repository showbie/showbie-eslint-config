/**
 * Ember-specific rules.
 */
module.exports = {
  plugins: ['ember', 'hbs'],
  extends: ['plugin:ember/recommended'],
  rules: {
    'ember/no-empty-attrs': 'error',
    'ember/order-in-components': 'error',
    'ember/order-in-controllers': 'error',
    'ember/order-in-models': 'error',
    'ember/order-in-routes': 'error',
    'ember/use-ember-get-and-set': 'error',

    // Inline Handlebars templates.
    'hbs/check-hbs-template-literals': ['error', 2],
  },
};
