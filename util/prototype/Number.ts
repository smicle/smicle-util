export {}
declare global {
  interface Number {
    _num(): number
    _str(): string
    _abs(): number
    _floor(): number
    _minusOnlyZero(): number
  }
}

Number.prototype._num = function(): number {
  return Number(this)
}

Number.prototype._str = function(): string {
  return String(this)
}

Number.prototype._abs = function(): number {
  return Math.abs(this._num())
}

Number.prototype._floor = function(): number {
  return Math.floor(this._num())
}

Number.prototype._minusOnlyZero = function(): number {
  return this._num() < 0 ? 0 : this._num()
}
