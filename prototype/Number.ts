export {}
declare global {
  interface Number {
    _str(): string
    _abs(): number
    _floor(): number
    _minusOnlyZero(): number
  }
}

Number.prototype._str = function(): string {
  return String(this)
}

Number.prototype._abs = function(): number {
  return Math.abs(this as number)
}

Number.prototype._floor = function(): number {
  return Math.floor(this as number)
}

Number.prototype._minusOnlyZero = function(): number {
  return (this as number) < 0 ? 0 : (this as number)
}
