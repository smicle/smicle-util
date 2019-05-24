"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
exports.input = function (s) {
    if (s === void 0) { s = ''; }
    return readlineSync.question(s);
};
