import { type SomeType } from './ShouldNotBeBundled'

export function IssueComponent() {
  const test: SomeType = {
    name: 'test',
  }
  return <div style={{ color: 'red' }}>{test.name}</div>
}