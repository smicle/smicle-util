"use strict";
exports.__esModule = true;
Object.prototype._empty = function () {
    return JSON.stringify(this) === '{}';
};
Object.prototype._equal = function (o) {
    return JSON.stringify(this) === JSON.stringify(o);
};
