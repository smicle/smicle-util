"use strict";
exports.__esModule = true;
Number.prototype._str = function () {
    return String(this);
};
Number.prototype._abs = function () {
    return Math.abs(this);
};
Number.prototype._round = function (n) {
    if (n === void 0) { n = 1; }
    return Math.round(this / n) * n;
};
Number.prototype._ceil = function (n) {
    if (n === void 0) { n = 1; }
    return Math.ceil(this / n) * n;
};
Number.prototype._floor = function (n) {
    if (n === void 0) { n = 1; }
    return Math.floor(this / n) * n;
};
Number.prototype._spaceFill = function (n) {
    var s = String(this);
    return ' '.repeat(n - s.length) + s;
};
Number.prototype._zeroFill = function (n) {
    var s = String(this);
    return '0'.repeat(n - s.length) + s;
};
Number.prototype._minusOnlyZero = function () {
    return this < 0 ? 0 : this;
};
