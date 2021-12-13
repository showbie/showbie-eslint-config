# @showbie/eslint-config-ember

> ESLint configuration for Showbie Ember projects

This config assumes the [settings from default Ember blueprints][] are included.

## Usage

Install the required packages:

```sh
npm i -D eslint prettier @showbie/eslint-config-ember
```

Then extend within your ESLint config (it should come _after_ the Ember
defaults but _before_ the Prettier rules):

```diff
{
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
+   '@showbie/eslint-config-ember'
    'plugin:prettier/recommended',
  ],
}
```

## Related packages

This config itself extends

- [`qunit/recommended`](https://github.com/platinumazure/eslint-plugin-qunit)

[settings from default ember blueprints]: https://github.com/ember-cli/ember-new-output/blob/master/.eslintrc.js
