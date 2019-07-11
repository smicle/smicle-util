import * as _util from '../index'

declare global {
  interface Array<T> {
    _isEmpty(): boolean
    _isEqual(a: Array<T>): boolean
    _count(n: T): number
    _uniq(): Array<T>
    _uniq$(): Array<T>
    _overlap(): Array<T>
    _overlap$(): Array<T>
    _first(n?: number): T | Array<T>
    _last(n?: number): T | Array<T>
    _take(n: number): Array<T>
    _take$(n: number): Array<T>
    _drop(n: number): Array<T>
    _drop$(n: number): Array<T>
    _sample(): T
    _sample$(): T
    _asc(s?: T): Array<T>
    _asc$(s?: T): Array<T>
    _desc(s?: T): Array<T>
    _desc$(s?: T): Array<T>
    _rotate(n?: number): Array<T>
    _rotate$(n?: number): Array<T>
    _shuffle(): Array<T>
    _shuffle$(): Array<T>
    _flat(): Array<T>
    _flat$(): Array<T>
    _zip<T>(...a: Array<Array<T>>): Array<Array<T | null>>
    _zip$<T>(...a: Array<Array<T>>): Array<Array<T | null>>
    _transpose(): Array<Array<T>>
    _transpose$(): Array<Array<T>>
    _copy(a: Array<T>): Array<T>
    _clear(): Array<T>
    _delete(s: T): Array<T>
    _delete$(s: T): Array<T>
    _remove<T extends unknown[]>(...n: T): Array<T>
    _remove$<T extends unknown[]>(...n: T): Array<T>
    _insert(n: number, ...m: Array<T> | Array<Array<T>>): Array<T>
    _insert$(n: number, ...m: Array<T> | Array<Array<T>>): Array<T>
    _compact(): Array<T>
    _compact$(): Array<T>
    _chunk(n: number): Array<Array<T>>
    _chunk$(n: number): Array<Array<T>>
    _each(callback: unknown, thisObject?: unknown): unknown[]
  }
}

Array.prototype._isEmpty = function(): boolean {
  return this.length === 0
}

Array.prototype._isEqual = function<T>(a: Array<T>): boolean {
  return JSON.stringify(this) === JSON.stringify(a)
}

Array.prototype._count = function<T>(n: T): number {
  return this.filter(v => v == n).length
}

Array.prototype._uniq = function<T>(): Array<T> {
  return Array.from(new Set(this))
}
Array.prototype._uniq$ = function<T>(): Array<T> {
  const a = this._uniq()
  return this._copy(a)
}

Array.prototype._overlap = function<T>(): Array<T> {
  return this.filter((v, i, a) => a.indexOf(v) === i && i !== a.lastIndexOf(v))
}
Array.prototype._overlap$ = function<T>(): Array<T> {
  const a = this._overlap()
  return this._copy(a)
}

Array.prototype._first = function<T>(n: number = 1): T | Array<T> {
  if (n === 1) {
    return this[0]
  } else {
    return _util.range(n).map(i => this[i])
  }
}

Array.prototype._last = function<T>(n: number = 1): T | Array<T> {
  const a = this.concat()
  if (n === 1) {
    return a.pop()
  }
  // prettier-ignore
  return a.reverse()._first(n).reverse()
}

Array.prototype._take = function<T>(n: number): Array<T> {
  const a = this.concat()
  return a._take$(n)
}
Array.prototype._take$ = function<T>(n: number): Array<T> {
  this.splice(n)
  return this
}

Array.prototype._drop = function<T>(n: number): Array<T> {
  const a = this.concat()
  return a.splice(n)
}
Array.prototype._drop$ = function<T>(n: number): Array<T> {
  return this.splice(n)
}

Array.prototype._sample = function<T>(): T {
  const a = this.concat()
  return a._sample$()
}
Array.prototype._sample$ = function<T>(): T {
  const n = _util.randInt(this.length)
  const v = this[n]
  this._remove$(n)
  return v
}

Array.prototype._asc = function<T>(s: string = ''): Array<T> {
  const a = this.concat()
  return a._asc$(s)
}
Array.prototype._asc$ = function<T>(s: string = ''): Array<T> {
  if (s === '') {
    return this.sort((a, b) => a - b)
  } else {
    return this.sort((a, b) => a[s] - b[s])
  }
}

Array.prototype._desc = function<T>(s: string = ''): Array<T> {
  const a = this.concat()
  return a._desc$(s)
}
Array.prototype._desc$ = function<T>(s: string = ''): Array<T> {
  if (s === '') {
    return this.sort((a, b) => b - a)
  } else {
    return this.sort((a, b) => b[s] - a[s])
  }
}

Array.prototype._rotate = function<T>(n: number = 1): Array<T> {
  const a = this.concat()
  return a._rotate$(n)
}
Array.prototype._rotate$ = function<T>(n: number = 1): Array<T> {
  n %= this.length
  this.unshift(...this.splice(n))
  return this
}

Array.prototype._shuffle = function<T>(): Array<T> {
  const a = this.concat()
  return _util.range(this.length).map(_ => a._sample$())
}
Array.prototype._shuffle$ = function<T>(): Array<T> {
  const a = this._shuffle()
  return this._copy(a)
}

Array.prototype._flat = function<T>(): Array<T> {
  const flattenDeep = (l: Array<T>): Array<T> =>
    l.reduce((a: Array<T>, c: T) => (Array.isArray(c) ? a.concat(flattenDeep(c)) : a.concat(c)), [])
  return flattenDeep(this)
}

Array.prototype._flat$ = function<T>(): Array<T> {
  const a = this._flat()
  return this._copy(a)
}

Array.prototype._zip = function<T>(...a: Array<Array<T>>): Array<Array<T | null>> {
  return this.map((v: T, i) => [v, ...a.map(e => (e[i] ? e[i] : null))])
}
Array.prototype._zip$ = function<T>(...a: Array<Array<T>>): Array<Array<T | null>> {
  return this._copy(this._zip(...a))
}

Array.prototype._transpose = function<T>(): Array<Array<T>> {
  return _util.range(this[0].length).map(i => _util.range(this.length).map(j => this[j][i]))
}
Array.prototype._transpose$ = function<T>(): Array<Array<T>> {
  const a = this._transpose()
  return this._copy(a)
}

Array.prototype._copy = function<T>(a: Array<T>): Array<T> {
  this._clear()
  a.forEach((v, i) => (this[i] = v))
  return this
}

Array.prototype._clear = function<T>(): Array<T> {
  this.length = 0
  return this
}

Array.prototype._delete = function<T>(s: T): Array<T> {
  const a = this.concat()
  return a._delete$(s)
}
Array.prototype._delete$ = function<T>(s: T): Array<T> {
  this._remove$(
    ...this.map((v, i) => [v, i])
      .filter(v => v._first() == s)
      .map(v => v._last())
  )
  return this
}

Array.prototype._remove = function<T extends unknown[]>(...n: T): Array<T> {
  const a = this.concat()
  return a._remove$(...n)
}
Array.prototype._remove$ = function<T extends unknown[]>(...n: T): Array<T> {
  n._flat$()._uniq$()
  if (n.length === 1) {
    this.splice(n._first() as number, 1)._first()
  } else if (n.length > 1) {
    ;(n._desc() as number[]).forEach(v => this.splice(v, 1))
  }
  return this
}

Array.prototype._insert = function<T>(n: number, ...m: Array<T> | Array<Array<T>>): Array<T> {
  const a = this.concat()
  return a._insert$(n, ...m)
}
Array.prototype._insert$ = function<T>(n: number, ...m: Array<T> | Array<Array<T>>): Array<T> {
  this.splice(n, 0, ...m._flat())
  return this
}

Array.prototype._compact = function<T>(): Array<T> {
  return this.filter(v => v)
}
Array.prototype._compact$ = function<T>(): Array<T> {
  const a = this._compact()
  return this._copy(a)
}

Array.prototype._chunk = function<T>(n: number): Array<Array<T>> {
  const l = this.length
  const m = n._ceil()
  return _util.range(0, l, m).map(i => this.slice(i, i + m))
}
Array.prototype._chunk$ = function<T>(n: number): Array<Array<T>> {
  const a = this._chunk(n)
  return this._copy(a)
}

Array.prototype._each = function(callback: unknown, thisObject?: unknown): unknown[] {
  return this.reduce(function(result, element) {
    result[result.length] = (callback as any).call(thisObject, element)
    return result
  }, [])
}
