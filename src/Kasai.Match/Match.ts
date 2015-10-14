
import {isMatch, MatchResult, positiveMatch} from '../Kasai.Compare/Compare'
import {Capture} from '../Kasai.Compare/Capture'

export var match = (value: any, patterns: any[]): any => {

    for (var i = 0; i < patterns.length; i++) {
        var pattern = patterns[i]
        var [guard, result] = pattern

        var r = result
        if(typeof result !== 'function'){
            r = (x) => result
        }

        var matchResult: MatchResult = isMatch(value, guard);

        if (positiveMatch(matchResult)) {
            if (matchResult instanceof Capture) {

                return r.apply(null, matchResult.value)
            }

            return r(value)
        }
    }
}
