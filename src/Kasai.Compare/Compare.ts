
import {Capture} from './Capture'

export type MatchResult = boolean | Capture;

export interface Comparator {
    (value: any): MatchResult;
}

export var positiveMatch = (r: MatchResult) => {
    return (r instanceof Capture) || r === true;
}

export var compareArrays = (value: any, pattern: any): MatchResult => {

    if (value.length !== pattern.length) return false

    var correct = value.map((x, i) => {
        return isMatch(x, pattern[i])
    })

    var numCorrect = correct.reduce((p, c) => p + (positiveMatch(c) ? 1 : 0 ), 0)
    var captures = correct.reduce((p, c) => { if (c instanceof Capture) { p.push(c) } return p; }, [])

    if (numCorrect === value.length && captures.length > 0) {
        return new Capture(captures)
    }

    return numCorrect === value.length
}

export var compareObjects = (value: any, pattern: any): MatchResult => {

    var valueKeys = Object.keys(value).filter((x) => value.hasOwnProperty(x))
    var patternKeys = Object.keys(pattern).filter((x) => pattern.hasOwnProperty(x))

    var orphanKeys = patternKeys.filter((k) => valueKeys.indexOf(k) === -1)
    if (orphanKeys.length > 0) return false

    var correct = patternKeys.map((k) => {
        return isMatch(value[k], pattern[k])
    })

    var numCorrect = correct.reduce((p, c) => p + (positiveMatch(c) ? 1 : 0), 0)
    var captures = correct.reduce((p, c) => { if (c instanceof Capture) { p.push(c) } return p; }, [])

    if (numCorrect === patternKeys.length && captures.length > 0) {
        return new Capture(captures)
    }

    return numCorrect === patternKeys.length
}

export var getComparator = (pattern: any): Comparator => {

    if (typeof pattern === 'function') return pattern
    if (typeof pattern === 'boolean') return (x) => x === pattern
    if (typeof pattern === 'number') return (x) => x === pattern
    if (typeof pattern === 'string') return (x) => x === pattern
    if (typeof pattern === 'object' && pattern.splice !== undefined) return (x) => compareArrays(x, pattern)

    return (x) => compareObjects(x, pattern)
}

export var isMatch = (value: any, pattern: any): MatchResult => {
    var comparator = getComparator(pattern)
    return comparator(value)
}
