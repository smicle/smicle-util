"use strict";
exports.__esModule = true;
Number.prototype._num = function () {
    return Number(this);
};
Number.prototype._str = function () {
    return String(this);
};
Number.prototype._abs = function () {
    return Math.abs(this._num());
};
Number.prototype._floor = function () {
    return Math.floor(this._num());
};
Number.prototype._minusOnlyZero = function () {
    return this._num() < 0 ? 0 : this._num();
};
