# @showbie/eslint-config-react

> ESLint configuration for Showbie React projects

## Usage

Install the required packages:

```sh
npm i -D eslint prettier @showbie/eslint-config-react
```

Then extend within your ESLint config:

```js
{
  extends: ['@showbie/eslint-config-react'],
}
```

## Related packages

This config itself extends

- [`@showbie/eslint-config`](https://github.com/showbie/showbie-eslint-config/tree/main/packages/base)
- [`@showbie/eslint-config-typescript`](https://github.com/showbie/showbie-eslint-config/tree/main/packages/typescript)
- [`react/recommended`](https://github.com/yannickcr/eslint-plugin-react)
- [`react-hooks/recommended`](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
- [`testing-library/react`](https://github.com/testing-library/eslint-plugin-testing-library)
- [`jest-dom/recommended`](https://github.com/testing-library/eslint-plugin-jest-dom)
- [`prettier/recommended`](https://github.com/prettier/eslint-plugin-prettier/#recommended-configuration)
