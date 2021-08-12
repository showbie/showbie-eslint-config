# @showbie/eslint-config-typescript

> ESLint configuration for Showbie TypeScript projects

## Usage

Install the required packages:

```sh
npm i -D eslint prettier @showbie/eslint-config-typescript
```

Then extend within your ESLint config:

```js
{
  extends: ['@showbie/eslint-config-typescript'],
}
```

## Related packages

This config itself extends

- [`@showbie/eslint-config`](https://github.com/showbie/showbie-eslint-config/tree/main/packages/base)
- [`@typescript-eslint/recommended`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.ts)
- [`prettier/recommended`](https://github.com/prettier/eslint-plugin-prettier/#recommended-configuration)
