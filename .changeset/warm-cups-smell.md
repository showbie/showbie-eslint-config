---
'@showbie/eslint-config': major
---

Switch to `naming-convention` TypeScript rule

The `camelcase` and `interface-name-prefix` rules were deprecated in a
previous typescript-eslint version. The former settings have been
migrated to the new rule options.

When upgrading to this version, make sure `@typescript-eslint/eslint-plugin`
and `@typescript-eslint/parser` are upgraded to their latest as well.
