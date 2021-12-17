module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks'],
  extends: [
    '@showbie/eslint-config-typescript',
    // https://github.com/yannickcr/eslint-plugin-react
    'plugin:react/recommended',
    // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    /**
     * Restrict file extensions that may contain JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
     */
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],

    /**
     * Enforce event handler naming conventions in JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
     */
    'react/jsx-handler-names': 'warn',

    /**
     * Prevent missing React when using JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
     */
    'react/react-in-jsx-scope': 'off',

    /**
     * Enforce component methods order
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/sort-comp.md
     */
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^handle.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],

    /**
     * Enforce hook dependencies
     */
    'react-hooks/exhaustive-deps': 'error',
  },
  overrides: [
    // Test files
    {
      files: ['*.test.(j|tsx?)'],
      env: {
        'jest/globals': true,
      },
      extends: [
        // https://github.com/testing-library/eslint-plugin-testing-library
        'plugin:testing-library/react',
        // https://github.com/testing-library/eslint-plugin-jest-dom
        'plugin:jest-dom/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        /**
         * Disallow the use of `cleanup`
         * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-manual-cleanup.md
         */
        'testing-library/no-manual-cleanup': 'error',

        /**
         * Suggest using `userEvent` library instead of `fireEvent` for simulating user interaction
         * @see https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-user-event.md
         */
        'testing-library/prefer-user-event': 'warn',
      },
    },
  ],
};
