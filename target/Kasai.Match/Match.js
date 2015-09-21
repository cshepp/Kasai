var Compare_1 = require('../Kasai.Compare/Compare');
exports.match = function (value, patterns) {
    for (var i = 0; i < patterns.length; i++) {
        var pattern = patterns[i];
        var guard = pattern[0], result = pattern[1];
        var r = result;
        if (typeof result !== 'function') {
            r = function (x) { return result; };
        }
        if (Compare_1.isMatch(value, guard))
            return r(value);
    }
};
