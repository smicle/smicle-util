export {}
declare global {
  interface Object {
    _isEmpty(): boolean
    _isEqual(o: object): boolean
  }
}

Object.prototype._isEmpty = function(): boolean {
  return JSON.stringify(this) === '{}'
}

Object.prototype._isEqual = function(o: object): boolean {
  return JSON.stringify(this) === JSON.stringify(o)
}
