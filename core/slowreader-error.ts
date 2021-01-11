export type ErrorCode =
  | 'missed-settings-store'
  | 'wrong-password'
  | 'no-server-migration'

export class SlowReaderError extends Error {
  constructor (code: ErrorCode) {
    super(code)
    this.name = 'SlowReaderError'
  }
}
