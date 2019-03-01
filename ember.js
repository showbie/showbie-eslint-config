/**
 * Ember-specific rules.
 */
module.exports = {
  plugins: ['ember'],
  extends: ['plugin:ember/recommended'],
  env: {
    browser: true,
  },
  rules: {
    'ember/no-empty-attrs': 'error',
    'ember/order-in-components': 'error',
    'ember/order-in-controllers': 'error',
    'ember/order-in-models': 'error',
    'ember/order-in-routes': 'error',
    'ember/use-ember-get-and-set': 'error',
  },
  overrides: [
    // node files
    {
      files: [
        'ember-cli-build.js',
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js',
      ],
      excludedFiles: [
        'addon/**',
        'addon-test-support/**',
        'app/**',
        'tests/dummy/app/**',
      ],
      parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      rules: Object.assign(
        {},
        require('eslint-plugin-node').configs.recommended.rules,
        {
          // without this, CI breaks when running pre-commit without installing Node dependencies
          'node/no-missing-require': 'off',
        }
      ),
    },

    // test files; ignore the ember-get rule
    {
      files: ['tests/**/*.js'],
      rules: { 'ember/use-ember-get-and-set': 'off' },
    },
  ],
};
