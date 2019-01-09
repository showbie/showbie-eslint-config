# Change Log

[![Keep a Changelog][img-changelog]][url-changelog]
[![Semantic Versioning][img-semver]][url-semver]

All notable changes to this project will be documented in this file.

## 0.2.0 — 2019-01-09

### 💣 Breaking Change
* [#1](https://github.com/showbie/showbie-eslint-config/pull/1) 📦 Upgrade `eslint-plugin-ember` & update Ember settings ([@stormwarning](https://github.com/stormwarning)) \
  The latest version introduced several changes to the `ember/recommended` configuration.

### 🚀 Enhancement
* [#6](https://github.com/showbie/showbie-eslint-config/pull/6) 🔥 Remove deprecated `experimentalObjectRestSpread` option ([@stormwarning](https://github.com/stormwarning)) \
  See the [migrating to 5.0.0 section](eslint.org/docs/user-guide/migrating-to-5.0.0#-the-experimentalobjectrestspread-option-has-been-deprecated) of the eslint docs for more details.
* [#5](https://github.com/showbie/showbie-eslint-config/pull/5) 🔥 Remove `semi` rule ([@stormwarning](https://github.com/stormwarning)) \
  This can be removed since Prettier will handle semicolons.
* [#1](https://github.com/showbie/showbie-eslint-config/pull/1) 📦 Upgrade `eslint-plugin-ember` & update Ember settings ([@stormwarning](https://github.com/stormwarning))

### 🏠 Internal
* [#4](https://github.com/showbie/showbie-eslint-config/pull/4) 📦 Add `lerna-changelog` ([@stormwarning](https://github.com/stormwarning))
* [#3](https://github.com/showbie/showbie-eslint-config/pull/3) 📦 Upgrade devDependencies ([@stormwarning](https://github.com/stormwarning))

### Committers: 1
- Jeff ([@stormwarning](https://github.com/stormwarning))

## 0.1.1 — 2018-07-16

- **Fixed:** Removed `parser` setting since the package is not installed

## 0.1.0 — 2018-04-11

### 🎉 Initial project release

[img-changelog]: https://img.shields.io/badge/keep-a%20changelog-ef5e39.svg?style=flat-square

[img-semver]: https://img.shields.io/badge/semantic-versioning-333333.svg?style=flat-square

[url-changelog]: https://keepachangelog.com

[url-semver]: https://semver.org
