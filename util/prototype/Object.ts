export {}
declare global {
  interface Object {
    _equal(o: object): boolean
  }
}

Object.prototype._equal = function(o: object): boolean {
  return JSON.stringify(this) === JSON.stringify(o)
}
