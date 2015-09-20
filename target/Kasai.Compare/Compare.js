exports.compareArrays = function (value, pattern) {
    var correct = value.map(function (x, i) {
        return exports.isMatch(x, pattern[i]) ? 1 : 0;
    });
    var numCorrect = correct.reduce(function (p, c) { return p + c; }, 0);
    return numCorrect === value.length;
};
exports.compareObjects = function (value, pattern) {
    return true;
};
exports.getComparator = function (pattern) {
    if (typeof pattern === 'function')
        return pattern;
    if (typeof pattern === 'boolean')
        return function (x) { return x === pattern; };
    if (typeof pattern === 'string')
        return function (x) { return x === x; };
    if (typeof pattern === 'object' && pattern.splice !== undefined)
        return exports.compareArrays;
    return exports.compareObjects;
};
exports.isMatch = function (value, pattern) {
    var comparator = exports.getComparator(pattern);
    return comparator(value);
};
