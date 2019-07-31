import * as _util from '../index'

declare global {
  interface String {
    _num(): number
    _pw(): string[]
    _splitNum(): number[]
    _spaceFill(n: number): string
    _zeroFill(n: number): string
  }
}

String.prototype._num = function(): number {
  const s = this.replace(/,/g, '')
  if (_util.isStrFinite(s)) {
    return Number(s)
  } else {
    throw new Error('Could not convert to a number')
  }
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
