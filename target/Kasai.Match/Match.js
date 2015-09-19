var Compare_1 = require('../Kasai.Compare/Compare');
exports.match = function (value, patterns) {
    patterns.forEach(function (pattern) {
        var guard = pattern[0], result = pattern[1];
        if (Compare_1.isMatch(value, guard))
            return result(value);
    });
};
