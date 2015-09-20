var Compare_1 = require('../Kasai.Compare/Compare');
exports.match = function (value, patterns) {
    patterns.forEach(function (pattern) {
        var guard = pattern[0], result = pattern[1];
        if (typeof result !== 'function') {
            result = function (x) { return result; };
        }
        if (Compare_1.isMatch(value, guard))
            return result(value);
    });
};
