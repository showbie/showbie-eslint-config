# @showbie/eslint-config-ember

> ESLint configuration for Showbie Ember projects

This config assumes the [settings from default Ember blueprints][] are included.

## Usage

Install the required packages:

```sh
npm i -D eslint prettier @showbie/eslint-config-ember
```

Then extend within your ESLint config:

```js
{
  extends: ['@showbie/eslint-config-ember'],
}
```

[settings from default ember blueprints]: https://github.com/ember-cli/ember-new-output/blob/master/.eslintrc.js
