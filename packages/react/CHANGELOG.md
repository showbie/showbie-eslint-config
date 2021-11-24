# @showbie/eslint-config-react

## 6.0.0 — 2021-11-24

#### 💣 Breaking Changes

- Upgraded `eslint-plugin-prettier` [#258](https://github.com/showbie/showbie-eslint-config/pull/258)  
  Support dropped for old versions of ESLint, Prettier, and Node. Minimum required
  versions are now `eslint@7.28.0`, `prettier@2`, `node@12`.

### Patch Changes

- Updated dependencies [[`007e50a`](https://github.com/showbie/showbie-eslint-config/commit/007e50a40ec756f51d0ce48a72ddf5a4ef8673d5)]:
  - @showbie/eslint-config-typescript@6.0.0

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
