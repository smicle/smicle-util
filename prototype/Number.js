"use strict";
exports.__esModule = true;
Number.prototype._str = function () {
    return String(this);
};
Number.prototype._abs = function () {
    return Math.abs(this);
};
Number.prototype._floor = function () {
    return Math.floor(this);
};
Number.prototype._minusOnlyZero = function () {
    return this < 0 ? 0 : this;
};
