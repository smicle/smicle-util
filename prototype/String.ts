export {}
declare global {
  interface String {
    _num(): number
    _pw(): string[]
  }
}

String.prototype._num = function(): number {
  return Number(this)
}

String.prototype._pw = function(): string[] {
  return this.split(' ')
}
