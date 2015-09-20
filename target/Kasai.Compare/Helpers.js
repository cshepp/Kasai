exports._ = function (x) { return true; };
exports.typeOf = function (t) { return function (x) { return typeof x === t; }; };
exports.instanceOf = function (c) { return function (x) { return x instanceof c; }; };
