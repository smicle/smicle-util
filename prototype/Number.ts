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

Number.prototype._round = function(n = 1): number {
  return Math.round((this as number) / n) * n
}

Number.prototype._ceil = function(n = 1): number {
  return Math.ceil((this as number) / n) * n
}

Number.prototype._floor = function(n = 1): number {
  return Math.floor((this as number) / n) * n
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
