"use strict";
exports.__esModule = true;
Object.prototype._isEmpty = function () {
    return JSON.stringify(this) === '{}';
};
Object.prototype._isEqual = function (o) {
    return JSON.stringify(this) === JSON.stringify(o);
};
