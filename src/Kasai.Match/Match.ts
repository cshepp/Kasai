
import {isMatch, MatchResult, positiveMatch} from '../Kasai.Compare/Compare'
import {Capture} from '../Kasai.Compare/Capture'

export var match = (value: any, patterns: any[]): any => {

    for (var i = 0; i < patterns.length; i++) {
        var pattern = patterns[i]
        
        var [guard, when, result] = pattern
        
        if (result === undefined) { 
            result = when
            when = () => true
        }
        
        var r = result
        if(typeof result !== 'function'){
            r = (x) => result
        }

        var matchResult: MatchResult = isMatch(value, guard);

        if (positiveMatch(matchResult)) {
            
            let v = matchResult instanceof Capture
                ? matchResult.value
                : [value];
            
            if (when.apply(null, v)){ 
                return r.apply(null, v);
            }
        }
    }
}
