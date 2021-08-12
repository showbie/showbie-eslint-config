**_Note:_ Further versions of these packages will be published to the GitHub Package registry.**

# showbie-eslint-config

[![npm version][npm-img]][npm-url]

[ESLint][] configuration for Showbie projects.

## Usage

Install the conventions by running:

```sh
# Ember projects
yarn add -D eslint prettier @showbie/eslint-config eslint-plugin-{ember,hbs}

# React projects
npm i -D eslint prettier @showbie/eslint-config @typescript-eslint/{eslint-plugin,parser} eslint-plugin-{react,react-hooks}
```

Then add the extends to your `.eslintrc.js`:

```js
{
  // Ember projects
  extends: ['@showbie', '@showbie/eslint-config/ember'],

  // React projects
  extends: ['@showbie', '@showbie/eslint-config/react'],

  rules: { /* … */ }
}
```

If Ember or React conventions aren’t required, don’t install the
plugins and don’t include the extra `extends` item.

You’ll probably want to ensure you have a couple of Prettier’s
options set as well.

```json
"prettier": {
  "singleQuote": true
}
```

[npm-url]: https://www.npmjs.com/package/@showbie/eslint-config
[npm-img]: https://img.shields.io/npm/v/@showbie/eslint-config.svg?style=flat-square
[eslint]: https://eslint.org
