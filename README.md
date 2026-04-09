# Vite 8 (or rolldown) issue reproduction: difference in bundling behavior between `import {type Thing}` and `import type {Thing}`

## Steps to reproduce:

### 1: case with expected behavior

In `IssueComponent.tsx`, there is a top-level import `import type { SomeType } from './ShouldNotBeBundled'`.

`ShouldNotBeBundled.ts` imports the `ts-invariant` library, but it is used only in an exported function that is used nowhere in the code.

Run `pnmp build`, then open the link to the vite devtools and go to the `packages` section. `ts-invariant` is not bundled, as expected.

### 2: case with faulty behavior

In `IssueComponent.tsx`, change the top level import to `import { type SomeType } from './ShouldNotBeBundled'`.

Run the build again, open the devtools and in the `packages` section your will see that `ts-invariant` has been bundled, as well as `tslib`.
