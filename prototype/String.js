"use strict";
exports.__esModule = true;
String.prototype._num = function () {
    var s = this.replace(/,/g, '');
    return Number(s);
    // return _util.isStrFinite(s) ? Number(s) : (this as string)
};
String.prototype._pw = function () {
    return this.split(' ');
};
String.prototype._splitNum = function () {
    return this.split(' ').map(Number);
};
String.prototype._spaceFill = function (n) {
    return ' '.repeat(n - this.length) + this;
};
String.prototype._zeroFill = function (n) {
    return '0'.repeat(n - this.length) + this;
};
