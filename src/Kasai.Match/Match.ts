
import {isMatch} from '../Kasai.Compare/Compare'

export var match = (value: any, patterns: any[]): any => {
    
    for (var i = 0; i < patterns.length; i++) { 
        var pattern = patterns[i]
        var [guard, result] = pattern
        
        var r = result
        if(typeof result !== 'function'){
            r = (x) => result
        }

        if(isMatch(value, guard)) return r(value);
    }
}
