exports.compareArrays = function (value, pattern) {
    if (value.length !== pattern.length)
        return false;
    var correct = value.map(function (x, i) {
        return exports.isMatch(x, pattern[i]) ? 1 : 0;
    });
    var numCorrect = correct.reduce(function (p, c) { return p + c; }, 0);
    return numCorrect === value.length;
};
exports.compareObjects = function (value, pattern) {
    var valueKeys = Object.keys(value).filter(function (x) { return value.hasOwnProperty(x); });
    var patternKeys = Object.keys(pattern).filter(function (x) { return pattern.hasOwnProperty(x); });
    var orphanKeys = patternKeys.filter(function (k) { return valueKeys.indexOf(k) === -1; });
    if (orphanKeys.length > 0)
        return false;
    var correct = patternKeys.map(function (k) {
        return exports.isMatch(value[k], pattern[k]) ? 1 : 0;
    });
    var numCorrect = correct.reduce(function (p, c) { return p + c; }, 0);
    return numCorrect === patternKeys.length;
};
exports.getComparator = function (pattern) {
    if (typeof pattern === 'function')
        return pattern;
    if (typeof pattern === 'boolean')
        return function (x) { return x === pattern; };
    if (typeof pattern === 'number')
        return function (x) { return x === pattern; };
    if (typeof pattern === 'string')
        return function (x) { return x === pattern; };
    if (typeof pattern === 'object' && pattern.splice !== undefined)
        return function (x) { return exports.compareArrays(x, pattern); };
    return function (x) { return exports.compareObjects(x, pattern); };
};
exports.isMatch = function (value, pattern) {
    var comparator = exports.getComparator(pattern);
    return comparator(value);
};
