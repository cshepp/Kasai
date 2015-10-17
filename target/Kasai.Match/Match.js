var Compare_1 = require('../Kasai.Compare/Compare');
var Capture_1 = require('../Kasai.Compare/Capture');
exports.match = function (value, patterns) {
    for (var i = 0; i < patterns.length; i++) {
        var pattern = patterns[i];
        var guard = pattern[0], when = pattern[1], result = pattern[2];
        if (result === undefined) {
            result = when;
            when = function () { return true; };
        }
        var r = result;
        if (typeof result !== 'function') {
            r = function (x) { return result; };
        }
        var matchResult = Compare_1.isMatch(value, guard);
        if (Compare_1.positiveMatch(matchResult)) {
            var v = matchResult instanceof Capture_1.Capture
                ? matchResult.value
                : [value];
            if (when.apply(null, v)) {
                return r.apply(null, v);
            }
        }
    }
};
