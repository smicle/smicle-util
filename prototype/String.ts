import * as _util from '../index'

declare global {
  interface String {
    _num(): number | string
    _pw(): string[]
    _splitNum(): number[]
    _spaceFill(n: number): string
    _zeroFill(n: number): string
  }
}

String.prototype._num = function(): number | string {
  return _util.isStrFinite(this) ? Number(this) : (this as string)
}

String.prototype._pw = function(): string[] {
  return this.split(' ')
}

String.prototype._splitNum = function(): number[] {
  return this.split(' ').map(Number)
}

String.prototype._spaceFill = function(n: number): string {
  return ' '.repeat(n - this.length) + this
}

String.prototype._zeroFill = function(n: number): string {
  return '0'.repeat(n - this.length) + this
}
