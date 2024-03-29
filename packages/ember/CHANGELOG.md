# @showbie/eslint-config-ember

## 6.1.1

### Patch Changes

- [#333](https://github.com/showbie/showbie-eslint-config/pull/333) [`d9f8545`](https://github.com/showbie/showbie-eslint-config/commit/d9f854532b1223f5d2f19d974d9ceaa6c42b557a) Thanks [@RobinPayne](https://github.com/RobinPayne)! - Updated peer dependencies so things can install better.

## 6.1.0 — 2021-12-17

#### 🎁 Added

- Added `eslint-plugin-qunit` plugin [#268](https://github.com/showbie/showbie-eslint-config/pull/268)  
  Adds recommended settings for QUnit tests.

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

## 4.0.2 — 2021-08-12

#### 🚚 Deprecated

- Further versions of this package will be published to the GitHub Package registry [#251](https://github.com/showbie/showbie-eslint-config/pull/251)

### 4.0.1 — 2021-03-17

#### 🐛 Fixed

- Update internal dependencies/extends [#226](https://github.com/showbie/showbie-eslint-config/pull/226)

## 4.0.0 — 2021-03-16

#### 🍱 Split config into separate package [#220](https://github.com/showbie/showbie-eslint-config/pull/220)

For previous changes, see [CHANGELOG.md](https://github.com/showbie/showbie-eslint-config/blob/main/CHANGELOG.md).
