---
'@showbie/eslint-config-typescript': patch
---

Add `no-empty-function` setting
Allows use in arrow functions, i.e. `() => {}`, which are currently used
frequently in tests, default props, and Storybook examples.
