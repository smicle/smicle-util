export {}
declare global {
  interface Number {
    _str(): string
    _abs(): number
    _round(n?: number): number
    _ceil(n?: number): number
    _floor(n?: number): number
    _spaceFill(n: number): string
    _zeroFill(n: number): string
    _minusOnlyZero(): number
  }
}

Number.prototype._str = function(): string {
  return String(this)
}

Number.prototype._abs = function(): number {
  return Math.abs(this as number)
}

Number.prototype._spaceFill = function(n: number): string {
  const s = String(this)
  return ' '.repeat(n - s.length) + s
}

Number.prototype._zeroFill = function(n: number): string {
  const s = String(this)
  return '0'.repeat(n - s.length) + s
}

Number.prototype._minusOnlyZero = function(): number {
  return this < 0 ? 0 : (this as number)
}
