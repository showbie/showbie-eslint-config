/**
 * Ember-specific rules.
 * Assumes settings from default Ember blueprints are included.
 *
 * @see https://github.com/ember-cli/ember-new-output/blob/master/.eslintrc.js
 */
module.exports = {
  plugins: ['ember', 'hbs'],
  rules: {
    /**
     * Disallow usage of empty attributes in Ember Data models.
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/no-empty-attrs.md
     */
    'ember/no-empty-attrs': 'error',

    /**
     * Enforce proper order of properties.
     * @see https://github.com/ember-cli/eslint-plugin-ember#stylistic-issues
     */
    'ember/order-in-components': 'error',
    'ember/order-in-controllers': 'error',
    'ember/order-in-models': 'error',
    'ember/order-in-routes': 'error',

    /**
     * Enforce usage of `Ember.get` and `Ember.set`.
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/use-ember-get-and-set.md
     */
    'ember/use-ember-get-and-set': 'error',

    /**
     * Run ember-template-lint on inline Handlebars templates.
     * @see https://github.com/ember-template-lint/eslint-plugin-hbs/blob/master/docs/rules/check-hbs-template-literals.md
     */
    'hbs/check-hbs-template-literals': ['error', 2],
  },
};
