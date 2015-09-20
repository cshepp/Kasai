
import {isMatch} from '../Kasai.Compare/Compare'

export var match = (value: any, patterns: any[]) => {

    patterns.forEach((pattern) => {

        let [guard, result] = pattern

        if(typeof result !== 'function'){
            result = (x) => result
        }

        if(isMatch(value, guard)) return result(value);
    })
}
