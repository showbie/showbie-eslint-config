# @showbie/eslint-config-react

## 7.2.0 — 2022-01-21

#### 🎁 Added

- Add `jest` plugin and recommended settings [#282](https://github.com/showbie/showbie-eslint-config/pull/282)

  Updates the test file overrides globs as well.

## 7.1.0 — 2021-12-17

#### ♻️ Changed

- Restrict testing rules to test files [#277](https://github.com/showbie/showbie-eslint-config/pull/277)  
  Only extends `testing-library` and `jest-dom` configs for \*.test. files.

## 7.0.0 — 2021-11-24

#### 💣 Breaking Changes

- Upgraded included eslint plugins to latest [#264](https://github.com/showbie/showbie-eslint-config/pull/264)  
  `eslint-plugin-testing-library` is a major version upgrade with changes to the
  recommended config; see the migration guides for [v4] and [v5] for details about
  the breaking changes.

  [v4]: https://github.com/testing-library/eslint-plugin-testing-library/blob/b510bd49aec17e58712edd46f889772eb3c35bc0/docs/migration-guides/v4.md
  [v5]: https://github.com/testing-library/eslint-plugin-testing-library/blob/b510bd49aec17e58712edd46f889772eb3c35bc0/docs/migration-guides/v5.md

#### 🎁 Added

- Enable [`jsx-handler-names`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md) rule [#266](https://github.com/showbie/showbie-eslint-config/pull/266)

## 6.0.0 — 2021-11-24

#### 💣 Breaking Changes

- Upgraded `eslint-plugin-prettier` [#258](https://github.com/showbie/showbie-eslint-config/pull/258)  
  Support dropped for old versions of ESLint, Prettier, and Node. Minimum required
  versions are now `eslint@7.28.0`, `prettier@2`, `node@12`.

## 5.0.0 — 2021-08-12

#### 💣 Breaking Changes

- New versions are now published to the GitHub Package registry [#253](https://github.com/showbie/showbie-eslint-config/pull/253)

  You will need to add the following to `.npmrc` in your project root:

  ```
  @showbie:registry=https://npm.pkg.github.com/showbie
  ```

- Updated dependencies [`eb057a1`](https://github.com/showbie/showbie-eslint-config/commit/eb057a18e4c0bce3efb079ca044b656338b15f4c):
  - @showbie/eslint-config-typescript@5.0.0

## 4.1.2 — 2021-08-12

#### 🚚 Deprecated

- Further versions of this package will be published to the GitHub Package registry [#251](https://github.com/showbie/showbie-eslint-config/pull/251)
- Updated dependencies [`1f5c22d`](https://github.com/showbie/showbie-eslint-config/commit/1f5c22d01801add5a2efcbb10f7fc136fa4f63ca):
  - @showbie/eslint-config-typescript@4.0.3

### 4.1.1 — 2021-04-05

#### 🐛 Fixed

- Install Prettier ESLint plugin with config [#232](https://github.com/showbie/showbie-eslint-config/pull/232)

## 4.1.0 — 2021-03-17

#### ♻️ Changed

- Re-enable `prefer-const` rule [#223](https://github.com/showbie/showbie-eslint-config/pull/223)

#### 🎁 Added

- Add `testing-library` plugins [#225](https://github.com/showbie/showbie-eslint-config/pull/225)

  Adds recommended settings for `react-testing-library` and `jest-dom`
  plugin rules.

#### 🐛 Fixed

- Update internal dependencies/extends [#226](https://github.com/showbie/showbie-eslint-config/pull/226)

## 4.0.0 — 2021-03-16

#### 🍱 Split config into separate package [#220](https://github.com/showbie/showbie-eslint-config/pull/220)

For previous changes, see [CHANGELOG.md](https://github.com/showbie/showbie-eslint-config/blob/main/CHANGELOG.md).
