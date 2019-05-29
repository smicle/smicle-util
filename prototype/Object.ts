export {}
declare global {
  interface Object {
    _empty(): boolean
    _equal(o: object): boolean
  }
}

Object.prototype._empty = function(): boolean {
  return JSON.stringify(this) === '{}'
}

Object.prototype._equal = function(o: object): boolean {
  return JSON.stringify(this) === JSON.stringify(o)
}
