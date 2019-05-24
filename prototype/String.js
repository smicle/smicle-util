"use strict";
exports.__esModule = true;
String.prototype._num = function () {
    return Number(this);
};
String.prototype._str = function () {
    return String(this);
};
String.prototype._pw = function () {
    return this.split(' ');
};
