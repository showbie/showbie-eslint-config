# @showbie/eslint-config-typescript

## 7.2.2

### Patch Changes

- [#333](https://github.com/showbie/showbie-eslint-config/pull/333) [`d9f8545`](https://github.com/showbie/showbie-eslint-config/commit/d9f854532b1223f5d2f19d974d9ceaa6c42b557a) Thanks [@RobinPayne](https://github.com/RobinPayne)! - Updated peer dependencies so things can install better.

- Updated dependencies [[`d9f8545`](https://github.com/showbie/showbie-eslint-config/commit/d9f854532b1223f5d2f19d974d9ceaa6c42b557a)]:
  - @showbie/eslint-config@7.2.2

## 7.2.1 — 2022-01-24

#### 🐛 Fixed

- Fix wildcard version ranges [#286](https://github.com/showbie/showbie-eslint-config/pull/286)

  Using version range instead of `*` for sibling packages should fix the
  issue of plugin dependencies not being installed.

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
  - @showbie/eslint-config@5.0.0

## 4.0.3 — 2021-08-12

#### 🚚 Deprecated

- Further versions of this package will be published to the GitHub Package registry [#251](https://github.com/showbie/showbie-eslint-config/pull/251)
- Updated dependencies [`1f5c22d`](https://github.com/showbie/showbie-eslint-config/commit/1f5c22d01801add5a2efcbb10f7fc136fa4f63ca):
  - @showbie/eslint-config@4.0.2

### 4.0.2

#### 🐛 Fixed

- Install Prettier ESLint plugin with config [#232](https://github.com/showbie/showbie-eslint-config/pull/232)

#### ♻️ Changed

- Add `no-empty-function` setting [#233](https://github.com/showbie/showbie-eslint-config/pull/233)
  Allows use in arrow functions, i.e. `() => {}`, which are currently used
  frequently in tests, default props, and Storybook examples.

### 4.0.1 — 2021-03-17

#### 🐛 Fixed

- Update internal dependencies/extends [#226](https://github.com/showbie/showbie-eslint-config/pull/226)

## 4.0.0 — 2021-03-16

#### 🍱 Split config into separate package [#220](https://github.com/showbie/showbie-eslint-config/pull/220)

For previous changes, see [CHANGELOG.md](https://github.com/showbie/showbie-eslint-config/blob/main/CHANGELOG.md).
