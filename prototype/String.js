"use strict";
exports.__esModule = true;
String.prototype._num = function () {
    return Number(this);
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
