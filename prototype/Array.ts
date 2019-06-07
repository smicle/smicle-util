import * as _util from '../index'

declare global {
  interface Array<T> {
    _isEmpty(): boolean
    _isEqual(a: any[]): boolean
    _count(n: any): number
    _uniq(): any[]
    _uniq$(): any[]
    _overlap(): any[]
    _overlap$(): any[]
    _first(n?: number): any | any[]
    _last(n?: number): any | any[]
    _take(n: number): any[]
    _take$(n: number): any[]
    _drop(n: number): any[]
    _drop$(n: number): any[]
    _sample(): any[]
    _sample$(): any[]
    _asc(s?: any): any[]
    _asc$(s?: any): any[]
    _desc(s?: any): any[]
    _desc$(s?: any): any[]
    _rotate(n?: number): any[]
    _rotate$(n?: number): any[]
    _shuffle(): any[]
    _shuffle$(): any[]
    _flat(): any[]
    _flat$(): any[]
    _zip(...a: any[]): any[]
    _zip$(...a: any[]): any[]
    _transpose(): any[]
    _transpose$(): any[]
    _copy(a: any[]): any[]
    _clear(): any[]
    _delete(s: any): any[]
    _delete$(s: any): any[]
    _remove(...n: any[]): any[]
    _remove$(...n: any[]): any[]
    _insert(n: number, ...m: any[]): any[]
    _insert$(n: number, ...m: any[]): any[]
    _compact(): any[]
    _compact$(): any[]
    _chunk(n: number): any[]
    _chunk$(n: number): any[]
    _each(callback: any, thisObject?: any): any[]
  }
}

Array.prototype._isEmpty = function(): boolean {
  return this.length === 0
}

Array.prototype._isEqual = function(a: any[]): boolean {
  return JSON.stringify(this) === JSON.stringify(a)
}

Array.prototype._count = function(n) {
  return this.filter(v => v == n).length
}

Array.prototype._uniq = function(): any[] {
  return Array.from(new Set(this))
}
Array.prototype._uniq$ = function(): any[] {
  const a = this._uniq()
  return this._copy(a)
}

Array.prototype._overlap = function(): any[] {
  return this.filter((v, i, a) => a.indexOf(v) === i && i !== a.lastIndexOf(v))
}
Array.prototype._overlap$ = function(): any[] {
  const a = this._overlap()
  return this._copy(a)
}

Array.prototype._first = function(n = 1): any | any[] {
  if (n === 1) {
    return this[0]
  } else {
    return _util.range(n).map(i => this[i])
  }
}

Array.prototype._last = function(n = 1): any | any[] {
  const a = this.concat()
  if (n === 1) {
    return a.pop()
  }
  // prettier-ignore
  return a.reverse()._first(n).reverse()
}

Array.prototype._take = function(n: number): any[] {
  const a = this.concat()
  return a._take$(n)
}
Array.prototype._take$ = function(n: number): any[] {
  this.splice(n)
  return this
}

Array.prototype._drop = function(n: number): any[] {
  const a = this.concat()
  return a.splice(n)
}
Array.prototype._drop$ = function(n: number): any[] {
  return this.splice(n)
}

Array.prototype._sample = function(): any[] {
  const a = this.concat()
  return a._sample$()
}
Array.prototype._sample$ = function() {
  const n = _util.randInt(this.length)
  const v = this[n]
  this._remove$(n)
  return v
}

Array.prototype._asc = function(s = '') {
  const a = this.concat()
  return a._asc$(s)
}
Array.prototype._asc$ = function(s = ''): any[] {
  if (s === '') {
    return this.sort((a, b) => a - b)
  } else {
    return this.sort((a, b) => a[s] - b[s])
  }
}

Array.prototype._desc = function(s = ''): any[] {
  const a = this.concat()
  return a._desc$(s)
}
Array.prototype._desc$ = function(s = ''): any[] {
  if (s === '') {
    return this.sort((a, b) => b - a)
  } else {
    return this.sort((a, b) => b[s] - a[s])
  }
}

Array.prototype._rotate = function(n = 1): any[] {
  const a = this.concat()
  return a._rotate$(n)
}
Array.prototype._rotate$ = function(n = 1): any[] {
  n %= this.length
  this.unshift(...this.splice(n))
  return this
}

Array.prototype._shuffle = function(): any[] {
  const a = this.concat()
  return _util.range(this.length).map(_ => a._sample$())
}
Array.prototype._shuffle$ = function(): any[] {
  const a = this._shuffle()
  return this._copy(a)
}

Array.prototype._flat = function(): any[] {
  const flattenDeep = (l: any[]): any[] =>
    l.reduce((a, c) => (Array.isArray(c) ? a.concat(flattenDeep(c)) : a.concat(c)), [])
  return flattenDeep(this)
}

Array.prototype._flat$ = function(): any[] {
  const a = this._flat()
  return this._copy(a)
}

Array.prototype._zip = function(...a: any[]): any[][] {
  return this.map((v, i) => [v, ...a.map(e => (e[i] ? e[i] : null))])
}
Array.prototype._zip$ = function(...a: any[]): any[][] {
  return this._copy(this._zip(...a))
}

Array.prototype._transpose = function(): any[][] {
  return _util.range(this[0].length).map(i => _util.range(this.length).map(j => this[j][i]))
}
Array.prototype._transpose$ = function(): any[][] {
  const a = this._transpose()
  return this._copy(a)
}

Array.prototype._copy = function(a: any[]): any[] {
  this._clear()
  a.forEach((v, i) => (this[i] = v))
  return this
}

Array.prototype._clear = function(): any[] {
  this.length = 0
  return this
}

Array.prototype._delete = function(s): any[] {
  const a = this.concat()
  return a._delete$(s)
}
Array.prototype._delete$ = function(s): any[] {
  this._remove$(
    ...this.map((v, i) => [v, i])
      .filter(v => v._first() == s)
      .map(v => v._last())
  )
  return this
}

Array.prototype._remove = function(...n: any[]): any[] {
  const a = this.concat()
  return a._remove$(n)
}
Array.prototype._remove$ = function(...n: any[]): any[] {
  n._flat$()
  if (n.length === 1) {
    this.splice(n._first(), 1)._first()
  } else if (n.length > 1) {
    n._desc().forEach(v => this.splice(v, 1))
  }
  return this
}

Array.prototype._insert = function(n: number, ...m: any[]): any[] {
  const a = this.concat()
  return a._insert$(n, m)
}
Array.prototype._insert$ = function(n: number, ...m: any[]): any[] {
  this.splice(n, 0, ...m._flat())
  return this
}

Array.prototype._compact = function(): any[] {
  return this.filter(v => v)
}
Array.prototype._compact$ = function(): any[] {
  const a = this._compact()
  return this._copy(a)
}

Array.prototype._chunk = function(n: number): any[] {
  const l = this.length
  const m = n._ceil()
  return _util.range(0, l, m).map(i => this.slice(i, i + m))
}
Array.prototype._chunk$ = function(n: number): any[] {
  const a = this._chunk(n)
  return this._copy(a)
}

Array.prototype._each = function(callback: any, thisObject?: any): any[] {
  return this.reduce(function(result, element) {
    result[result.length] = callback.call(thisObject, element)
    return result
  }, [])
}
