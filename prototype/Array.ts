import * as _util from '../index'

declare global {
  interface Array<T> {
    _empty(): boolean
    _equal(a: any[]): boolean
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
    _zip(): any[]
    _zip$(): any[]
    _transpose(): any[]
    _transpose$(): any[]
    _copy(a: any[]): any[]
    _clear(): any[]
    _delete(s: any): any[]
    _delete$(s: any): any[]
    _remove(...n: number[]): any[]
    _remove$(...n: number[]): any[]
    _insert(n: number, ...m: any[]): any[]
    _insert$(n: number, ...m: any[]): any[]
    _compact(): any[]
    _compact$(): any[]
  }
}

Array.prototype._empty = function(): boolean {
  return this.length === 0
}

Array.prototype._equal = function(a: any[]): boolean {
  return JSON.stringify(this) === JSON.stringify(a)
}

Array.prototype._count = function(n) {
  return this.filter(v => v == n).length
}

Array.prototype._uniq = function(): any[] {
  return Array.from(new Set(this))
}
Array.prototype._uniq$ = function(): any[] {
  const a = Array.from(new Set(this))
  return this._copy(a)
}

Array.prototype._overlap = function(): any[] {
  return this.filter((v, i, a) => a.indexOf(v) === i && i !== a.lastIndexOf(v))
}
Array.prototype._overlap$ = function(): any[] {
  const a = this.filter((v, i, a) => a.indexOf(v) === i && i !== a.lastIndexOf(v))
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
  a.splice(n)
  return a
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
  const n = _util.randInt(this.length)
  return this[n]
}
Array.prototype._sample$ = function() {
  const n = _util.randInt(this.length)
  return this._remove(n)
}

Array.prototype._asc = function(s = '') {
  const p = this.concat()
  if (s === '') {
    return p.sort((a, b) => a - b)
  } else {
    return p.sort((a, b) => a[s] - b[s])
  }
}
Array.prototype._asc$ = function(s = ''): any[] {
  if (s === '') {
    return this.sort((a, b) => a - b)
  } else {
    return this.sort((a, b) => a[s] - b[s])
  }
}

Array.prototype._desc = function(s = ''): any[] {
  const p = this.concat()
  if (s === '') {
    return p.sort((a, b) => b - a)
  } else {
    return p.sort((a, b) => b[s] - a[s])
  }
}
Array.prototype._desc$ = function(s = ''): any[] {
  if (s === '') {
    return this.sort((a, b) => b - a)
  } else {
    return this.sort((a, b) => b[s] - a[s])
  }
}

Array.prototype._rotate = function(n = 1): any[] {
  n %= this.length
  const a = this.concat()
  a.unshift(...a.splice(n))
  return a
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
  const a = this.concat()
  _util.range(this.length).forEach(i => (this[i] = a._sample$()))
  return this
}

Array.prototype._flat = function(): any[] {
  return this.toString()
    .split(',')
    .map(v => v._num())
}
Array.prototype._flat$ = function(): any[] {
  const a = this.toString()
    .split(',')
    .map(Number)
  return this._copy(a)
}

Array.prototype._zip = function(...a: any[]): any[][] {
  return this.map((v, i) => [v, ...a.map(e => (e[i] ? e[i] : null))])
}
Array.prototype._zip$ = function(...a: any[]): any[][] {
  const p = this.map((v, i) => [v, ...a.map(e => (e[i] ? e[i] : null))])
  return this._copy(p)
}

Array.prototype._transpose = function(): any[][] {
  const [a, b] = this
  return a.map((v: any, i: number) => [v, b[i]])
}
Array.prototype._transpose$ = function(): any[][] {
  const [a, b] = this
  const p = a.map((v: any, i: number) => [v, b[i]])
  return this._copy(p)
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
  const n: number[] = []
  a.map((v, i) => v == s && n.push(i))
  return a._remove(...n)
}
Array.prototype._delete$ = function(s): any[] {
  const n: number[] = []
  this.map((v, i) => v == s && n.push(i))
  this._remove$(...n)
  return this
}

Array.prototype._remove = function(...n: number[]): any | any[] {
  n._flat$()
  const a = this.concat()
  if (n.length === 0) {
    return undefined
  } else if (n.length === 1) {
    a.splice(n._first(), 1)._first()
    return a
  } else {
    return a.filter(v => !n.includes(v))
  }
}
Array.prototype._remove$ = function(...n: number[]): any[] {
  n._flat$()
  if (n.length === 0) {
    return this
  } else if (n.length === 1) {
    this.splice(n._first(), 1)._first()
    return this
  } else {
    const a = this.filter(v => !n.includes(v))
    return this._copy(a)
  }
}

Array.prototype._insert = function(n: number, ...m: any[]): any[] {
  const a = this.concat()
  return a._insert$(n, m)
}
Array.prototype._insert$ = function(n: number, ...m: any[]): any[] {
  console.log(...m._flat())
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
