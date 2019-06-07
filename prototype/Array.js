"use strict";
exports.__esModule = true;
var _util = require("../index");
Array.prototype._isEmpty = function () {
    return this.length === 0;
};
Array.prototype._isEqual = function (a) {
    return JSON.stringify(this) === JSON.stringify(a);
};
Array.prototype._count = function (n) {
    return this.filter(function (v) { return v == n; }).length;
};
Array.prototype._uniq = function () {
    return Array.from(new Set(this));
};
Array.prototype._uniq$ = function () {
    var a = this._uniq();
    return this._copy(a);
};
Array.prototype._overlap = function () {
    return this.filter(function (v, i, a) { return a.indexOf(v) === i && i !== a.lastIndexOf(v); });
};
Array.prototype._overlap$ = function () {
    var a = this._overlap();
    return this._copy(a);
};
Array.prototype._first = function (n) {
    var _this = this;
    if (n === void 0) { n = 1; }
    if (n === 1) {
        return this[0];
    }
    else {
        return _util.range(n).map(function (i) { return _this[i]; });
    }
};
Array.prototype._last = function (n) {
    if (n === void 0) { n = 1; }
    var a = this.concat();
    if (n === 1) {
        return a.pop();
    }
    // prettier-ignore
    return a.reverse()._first(n).reverse();
};
Array.prototype._take = function (n) {
    var a = this.concat();
    return a._take$(n);
};
Array.prototype._take$ = function (n) {
    this.splice(n);
    return this;
};
Array.prototype._drop = function (n) {
    var a = this.concat();
    return a.splice(n);
};
Array.prototype._drop$ = function (n) {
    return this.splice(n);
};
Array.prototype._sample = function () {
    var a = this.concat();
    return a._sample$();
};
Array.prototype._sample$ = function () {
    var n = _util.randInt(this.length);
    var v = this[n];
    this._remove$(n);
    return v;
};
Array.prototype._asc = function (s) {
    if (s === void 0) { s = ''; }
    var a = this.concat();
    return a._asc$(s);
};
Array.prototype._asc$ = function (s) {
    if (s === void 0) { s = ''; }
    if (s === '') {
        return this.sort(function (a, b) { return a - b; });
    }
    else {
        return this.sort(function (a, b) { return a[s] - b[s]; });
    }
};
Array.prototype._desc = function (s) {
    if (s === void 0) { s = ''; }
    var a = this.concat();
    return a._desc$(s);
};
Array.prototype._desc$ = function (s) {
    if (s === void 0) { s = ''; }
    if (s === '') {
        return this.sort(function (a, b) { return b - a; });
    }
    else {
        return this.sort(function (a, b) { return b[s] - a[s]; });
    }
};
Array.prototype._rotate = function (n) {
    if (n === void 0) { n = 1; }
    var a = this.concat();
    return a._rotate$(n);
};
Array.prototype._rotate$ = function (n) {
    if (n === void 0) { n = 1; }
    n %= this.length;
    this.unshift.apply(this, this.splice(n));
    return this;
};
Array.prototype._shuffle = function () {
    var a = this.concat();
    return _util.range(this.length).map(function (_) { return a._sample$(); });
};
Array.prototype._shuffle$ = function () {
    var a = this._shuffle();
    return this._copy(a);
};
Array.prototype._flat = function () {
    var flattenDeep = function (l) {
        return l.reduce(function (a, c) { return (Array.isArray(c) ? a.concat(flattenDeep(c)) : a.concat(c)); }, []);
    };
    return flattenDeep(this);
};
Array.prototype._flat$ = function () {
    var a = this._flat();
    return this._copy(a);
};
Array.prototype._zip = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return this.map(function (v, i) { return [v].concat(a.map(function (e) { return (e[i] ? e[i] : null); })); });
};
Array.prototype._zip$ = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return this._copy(this._zip.apply(this, a));
};
Array.prototype._transpose = function () {
    var _this = this;
    return _util.range(this[0].length).map(function (i) { return _util.range(_this.length).map(function (j) { return _this[j][i]; }); });
};
Array.prototype._transpose$ = function () {
    var a = this._transpose();
    return this._copy(a);
};
Array.prototype._copy = function (a) {
    var _this = this;
    this._clear();
    a.forEach(function (v, i) { return (_this[i] = v); });
    return this;
};
Array.prototype._clear = function () {
    this.length = 0;
    return this;
};
Array.prototype._delete = function (s) {
    var a = this.concat();
    return a._delete$(s);
};
Array.prototype._delete$ = function (s) {
    this._remove$.apply(this, this.map(function (v, i) { return [v, i]; })
        .filter(function (v) { return v._first() == s; })
        .map(function (v) { return v._last(); }));
    return this;
};
Array.prototype._remove = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    var a = this.concat();
    return a._remove$(n);
};
Array.prototype._remove$ = function () {
    var _this = this;
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    n._flat$();
    if (n.length === 1) {
        this.splice(n._first(), 1)._first();
    }
    else if (n.length > 1) {
        n._desc().forEach(function (v) { return _this.splice(v, 1); });
    }
    return this;
};
Array.prototype._insert = function (n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    var a = this.concat();
    return a._insert$(n, m);
};
Array.prototype._insert$ = function (n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    this.splice.apply(this, [n, 0].concat(m._flat()));
    return this;
};
Array.prototype._compact = function () {
    return this.filter(function (v) { return v; });
};
Array.prototype._compact$ = function () {
    var a = this._compact();
    return this._copy(a);
};
Array.prototype._chunk = function (n) {
    var _this = this;
    var l = this.length;
    var m = n._ceil();
    return _util.range(0, l, m).map(function (i) { return _this.slice(i, i + m); });
};
Array.prototype._chunk$ = function (n) {
    var a = this._chunk(n);
    return this._copy(a);
};
Array.prototype._each = function (callback, thisObject) {
    return this.reduce(function (result, element) {
        result[result.length] = callback.call(thisObject, element);
        return result;
    }, []);
};
