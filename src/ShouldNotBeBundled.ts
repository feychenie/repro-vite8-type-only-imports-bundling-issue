import * as Invariant from 'ts-invariant';

export type SomeType = {
  name: string
}

// ts-invariant should not be bundled unless this function is used in the code.
export function someFunction() {
  throw new Invariant.InvariantError("THIS SHOULD NOT BE BUNDLED")
}
