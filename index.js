"use strict";
exports.__esModule = true;
require("./prototype/prototype");
var readlineSync = require("readline-sync");
exports.input = function (s) {
    if (s === void 0) { s = ''; }
    return readlineSync.question(s);
};
exports.range = function (start, stop, step) {
    if (stop === void 0) { stop = 0; }
    if (step === void 0) { step = 1; }
    switch (arguments.length) {
        case 1:
            return Array.from(Array(start), function (_, i) { return i; });
        case 2:
            var n = -start + stop;
            return Array.from(Array(n._minusOnlyZero()), function (_) { return start++; });
        case 3:
            if (step > 0) {
                var n_1 = -start + stop;
                return Array.from(Array(n_1._minusOnlyZero()), function (_) { return start++; }).filter(function (_, i) { return i % step == 0; });
            }
            else if (step < 0) {
                var n_2 = start + -stop;
                return Array.from(Array(n_2._minusOnlyZero()), function (_) { return start--; }).filter(function (_, i) { return i % step == 0; });
            }
            else {
                console.error(Error('range() arg 3 must not be zero'));
                process.exit(1);
            }
    }
    return [];
};
exports.rand = function (n) { return Math.random() * n; };
exports.randInt = function (n) { return exports.rand(n)._floor(); };
exports.max = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return Math.max.apply(Math, n._flat());
};
exports.min = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return Math.min.apply(Math, n._flat());
};
exports.sum = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n._flat().reduce(function (a, c) { return a + c; });
};
exports.mean = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    n._flat$();
    return exports.sum(n) / n.length;
};
exports.isNumber = function (v) { return typeof v === 'number'; };
exports.isFinite = function (v) { return Number.isFinite(v); };
exports.isStrFinite = function (v) { return RegExp(/^[-+]?[0-9]+(\.[0-9]+)?$/).test(v); };
