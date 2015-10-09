var Compare_1 = require('../Kasai.Compare/Compare');
var Capture_1 = require('../Kasai.Compare/Capture');
exports.match = function (value, patterns) {
    for (var i = 0; i < patterns.length; i++) {
        var pattern = patterns[i];
        var guard = pattern[0], result = pattern[1];
        var r = result;
        if (typeof result !== 'function') {
            r = function (x) { return result; };
        }
        // if(isMatch(value, guard)) return r(value);
        var matchResult = Compare_1.isMatch(value, guard);
        if (Compare_1.positiveMatch(matchResult)) {
            if (matchResult instanceof Capture_1.Capture) {
                var args = (typeof matchResult.value === 'object' && matchResult.value.splice !== undefined)
                    ? matchResult.value
                    : [matchResult.value];
                return r.apply(null, args);
            }
            return r(value);
        }
    }
};
