"use strict";
exports.__esModule = true;
require("./prototype/prototype");
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
            }
    }
    return [];
};
exports.rand = function (n) { return Math.random() * n; };
exports.randInt = function (n) { return exports.rand(n)._floor(); };
exports.plus = function (a, b) { return a + b; };
exports.minus = function (a, b) { return a - b; };
exports.multiple = function (a, b) { return a * b; };
exports.division = function (a, b) { return a / b; };
exports.remainder = function (a, b) { return a % b; };
exports.exponent = function (a, b) { return Math.pow(a, b); };
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
    return n._flat().reduce(exports.plus);
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
exports.isStrFinite = function (v) {
    return RegExp(/^[-+]?[0-9]+(\.[0-9]+)?$/).test(v);
};
