# @showbie/eslint-config

> ESLint configuration for Showbie projects

## Usage

Install the required packages:

```sh
npm i -D eslint prettier @showbie/eslint-config
```

Then extend within your ESLint config:

```js
{
  extends: ['@showbie'],
}
```

## Related packages

This config itself extends

- [`eslint/recommended`](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
- [`prettier/recommended`](https://github.com/prettier/eslint-plugin-prettier/#recommended-configuration)
