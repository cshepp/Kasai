exports._ = function (x) { return true; };
var compareArrays = function (value, pattern) {
    return true;
};
var compareObjects = function (value, pattern) {
    return true;
};
var getComparator = function (pattern) {
    if (typeof pattern === 'function')
        return pattern;
    if (typeof pattern === 'boolean')
        return function (x) { return x === pattern; };
    if (typeof pattern === 'string')
        return function (x) { return x === x; };
    if (typeof pattern === 'object' && pattern.splice !== undefined)
        return compareArrays;
    return compareObjects;
};
exports.isMatch = function (value, pattern) {
    var comparator = getComparator(pattern);
    return comparator(value);
};
