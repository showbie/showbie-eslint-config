# showbie-eslint-config

[![npm version][npm-img]][npm-url]

[ESLint][] configuration for Showbie projects.

## Usage

Install the conventions by running:

```sh
yarn add -D eslint @showbie/eslint-config
```

Then add the extends to your `.eslintrc.js`:

```js
{
  extends: ['@showbie/eslint-config', '@showbie/eslint-config/ember'],
  rules: { /* … */ }
}
```

You’ll probably want to ensure you have a couple of Prettier’s
options set as well.

```json
"prettier": {
  "arrowParens": "always",
  "singleQuote": true,
  "trailingComma": "es5"
}
```

[npm-url]: https://www.npmjs.com/package/@showbie/eslint-config

[npm-img]: https://img.shields.io/npm/v/@showbie/eslint-config.svg?style=flat-square

[eslint]: https://eslint.org
