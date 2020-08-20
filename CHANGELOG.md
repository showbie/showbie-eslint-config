# Change Log

## 2.0.0 — 2020-08-20

#### 💣 Breaking Change

- [#181](https://github.com/showbie/showbie-eslint-config/pull/181)  Upgrade `eslint-plugin-ember` to 8.12.0 \
  A breaking change due to the updates to the recommended rules config
  (see [changelog](https://github.com/ember-cli/eslint-plugin-ember/blob/master/CHANGELOG.md#v800-2020-03-28))

#### 🚀 Enhancement

- [#185](https://github.com/showbie/showbie-eslint-config/pull/185)  Add `react-hooks` plugin to the React config
- [#172](https://github.com/showbie/showbie-eslint-config/pull/172) Upgrade Prettier to 2.0.5 \
  This is a major version increase to Prettier, which has some new
  default settings, as well as other updates. For more info, see
  [the changelog](https://prettier.io/blog/2020/03/21/2.0.0.html)
- [#186](https://github.com/showbie/showbie-eslint-config/pull/186) Change Ember config to account for Ember blueprints \
  For the Ember config we should assume the default ESLint settings from
  Ember blueprints are in place.

#### 🏠 Internal

- [#182](https://github.com/showbie/showbie-eslint-config/pull/182) Add an explicit LICENSE file to match the `package.json` setting

## 1.1.0 — 2019-12-17

#### 🚀 Enhancement

- [#126](https://github.com/showbie/showbie-eslint-config/pull/126) Add `react/sort-comp` and other React rules
- [#120](https://github.com/showbie/showbie-eslint-config/pull/120) Bump eslint-plugin-ember from 7.3.0 to 7.7.1
- [#118](https://github.com/showbie/showbie-eslint-config/pull/118) Bump eslint-config-prettier from 6.5.0 to 6.7.0

#### 🏠 Internal

- [#120](https://github.com/showbie/showbie-eslint-config/pull/120) Bump eslint-plugin-ember from 7.3.0 to 7.7.1
- [#128](https://github.com/showbie/showbie-eslint-config/pull/128) Bump @typescript-eslint/eslint-plugin from 2.6.1 to 2.10.0
- [#118](https://github.com/showbie/showbie-eslint-config/pull/118) Bump eslint-config-prettier from 6.5.0 to 6.7.0
- [#127](https://github.com/showbie/showbie-eslint-config/pull/127) Bump @typescript-eslint/parser from 2.6.1 to 2.10.0
- [#122](https://github.com/showbie/showbie-eslint-config/pull/122) Bump eslint-plugin-react from 7.16.0 to 7.17.0
- [#123](https://github.com/showbie/showbie-eslint-config/pull/123) Bump prettier from 1.18.2 to 1.19.1
- [#125](https://github.com/showbie/showbie-eslint-config/pull/125) Bump eslint from 6.6.0 to 6.7.2
- [#121](https://github.com/showbie/showbie-eslint-config/pull/121) Bump lint-staged from 9.4.2 to 9.5.0
- [#119](https://github.com/showbie/showbie-eslint-config/pull/119) Bump husky from 3.0.9 to 3.1.0
- [#116](https://github.com/showbie/showbie-eslint-config/pull/116) Bump lerna-changelog from 0.8.2 to 0.8.3

## 1.0.0 — 2019-11-05

#### 🚀 Enhancement

- 💣 [#115](https://github.com/showbie/showbie-eslint-config/pull/115) ⚙️ Update Prettier config
  - Removes the `prettier-eslint-cli` package and configures eslint to
    run `prettier` as an `eslint` plugin
  - Removes blueprint settings from Ember config, leaving only settings
    that are custom to Showbie
  - Removes duplicate settings from React config

#### 🏠 Internal

- [#103](https://github.com/showbie/showbie-eslint-config/pull/103) Bump `husky` to 3.0.9
- [#96](https://github.com/showbie/showbie-eslint-config/pull/96) Bump `eslint-plugin-react` to 7.16.0
- [#112](https://github.com/showbie/showbie-eslint-config/pull/112) Bump `@typescript-eslint/parser` to 2.6.1
- [#113](https://github.com/showbie/showbie-eslint-config/pull/113) Bump `@typescript-eslint/eslint-plugin` to 2.6.1
- [#114](https://github.com/showbie/showbie-eslint-config/pull/114) Upgrade devDependencies

### 0.4.1 — 2019-08-22

#### 🐛 Bug Fix

- Fix `parser` setting in React config

## 0.4.0 — 2019-08-22

#### 🚀 Enhancement

- [#64](https://github.com/showbie/showbie-eslint-config/pull/64) Add React/TypeScript settings

#### 🏠 Internal

- [#65](https://github.com/showbie/showbie-eslint-config/pull/65) Update dependency versions

### 0.3.4 — 2019-07-16

#### 🏠 Internal

- [#50](https://github.com/showbie/showbie-eslint-config/pull/50) Bump lodash.merge from 4.6.1 to 4.6.2
- [#51](https://github.com/showbie/showbie-eslint-config/pull/51) Bump lodash from 4.17.11 to 4.17.14
- [#52](https://github.com/showbie/showbie-eslint-config/pull/52) Bump lint-staged from 9.0.2 to 9.2.0

### 0.3.3 — 2019-07-05

#### 🏠 Internal

- [#45](https://github.com/showbie/showbie-eslint-config/pull/45) Bump husky from 2.4.1 to 3.0.0
- [#37](https://github.com/showbie/showbie-eslint-config/pull/37) Bump prettier-eslint-cli from 4.7.1 to 5.0.0
- [#43](https://github.com/showbie/showbie-eslint-config/pull/43) Bump eslint-config-prettier from 4.3.0 to 6.0.0
- [#48](https://github.com/showbie/showbie-eslint-config/pull/48) Bump lint-staged from 8.2.1 to 9.0.2
- [#47](https://github.com/showbie/showbie-eslint-config/pull/47) Bump eslint-plugin-ember from 6.5.1 to 6.7.1

### 0.3.2 — 2019-06-14

#### 🏠 Internal

- [#34](https://github.com/showbie/showbie-eslint-config/pull/34) Bump lint-staged from 8.2.0 to 8.2.1

### 0.3.1 — 2019-06-12

#### 🏠 Internal

- [#31](https://github.com/showbie/showbie-eslint-config/pull/31) Bump lint-staged from 8.1.5 to 8.2.0
- [#33](https://github.com/showbie/showbie-eslint-config/pull/33) Bump husky from 1.3.1 to 2.4.1
- [#30](https://github.com/showbie/showbie-eslint-config/pull/30) Bump eslint-plugin-ember from 6.3.0 to 6.5.1
- [#28](https://github.com/showbie/showbie-eslint-config/pull/28) Bump eslint-config-prettier from 4.1.0 to 4.3.0
- [#20](https://github.com/showbie/showbie-eslint-config/pull/20) Bump eslint from 5.15.3 to 5.16.0

## 0.3.0 — 2019-03-01

#### 🚀 Enhancement

- [#15](https://github.com/showbie/showbie-eslint-config/pull/15) Update Ember config overrides

#### 🏠 Internal

- [#9](https://github.com/showbie/showbie-eslint-config/pull/9) Bump lodash from 4.17.5 to4.17.11
- [#13](https://github.com/showbie/showbie-eslint-config/pull/13) Bump eslint-config-prettier from 4.0.0 to 4.1.0
- [#12](https://github.com/showbie/showbie-eslint-config/pull/12) Bump eslint from 5.13.0 to 5.14.1
- [#14](https://github.com/showbie/showbie-eslint-config/pull/14) Bump lint-staged from 8.1.3 to 8.1.5
- [#8](https://github.com/showbie/showbie-eslint-config/pull/8) Bump eslint-plugin-ember from 6.1.0 to 6.2.0
- [#7](https://github.com/showbie/showbie-eslint-config/pull/7) Upgrade devDependencies

## 0.2.0 — 2019-01-09

#### 💣 Breaking Change

- [#1](https://github.com/showbie/showbie-eslint-config/pull/1) Upgrade `eslint-plugin-ember` & update Ember settings \
  The latest version introduced several changes to the `ember/recommended` configuration.

#### 🚀 Enhancement

- [#6](https://github.com/showbie/showbie-eslint-config/pull/6) Remove deprecated `experimentalObjectRestSpread` option \
  See the [migrating to 5.0.0 section](eslint.org/docs/user-guide/migrating-to-5.0.0#-the-experimentalobjectrestspread-option-has-been-deprecated) of the eslint docs for more details.
- [#5](https://github.com/showbie/showbie-eslint-config/pull/5) Remove `semi` rule \
  This can be removed since Prettier will handle semicolons.
- [#1](https://github.com/showbie/showbie-eslint-config/pull/1) Upgrade `eslint-plugin-ember` & update Ember settings

#### 🏠 Internal

- [#4](https://github.com/showbie/showbie-eslint-config/pull/4) Add `lerna-changelog`
- [#3](https://github.com/showbie/showbie-eslint-config/pull/3) Upgrade devDependencies

### 0.1.1 — 2018-07-16

#### 🐛 Bug Fix

- Remove `parser` setting since the package is not installed

## 0.1.0 — 2018-04-11

#### 🎉 Initial project release
