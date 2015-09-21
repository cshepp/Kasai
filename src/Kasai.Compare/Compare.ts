
export var compareArrays = (value: any, pattern: any): boolean => {

    if (value.length !== pattern.length) return false

    var correct = value.map((x, i) => {
        return isMatch(x, pattern[i]) ? 1 : 0
    })

    var numCorrect = correct.reduce((p, c) => p + c, 0)
    return numCorrect === value.length
}

export var compareObjects = (value: any, pattern: any): boolean => {
    
    var valueKeys = Object.keys(value).filter((x) => value.hasOwnProperty(x))
    var patternKeys = Object.keys(pattern).filter((x) => pattern.hasOwnProperty(x))
    
    var orphanKeys = patternKeys.filter((k) => valueKeys.indexOf(k) === -1)
    if (orphanKeys.length > 0) return false

    var correct = patternKeys.map((k) => {         
        return isMatch(value[k], pattern[k]) ? 1 : 0
    })
    
    var numCorrect = correct.reduce((p, c) => p + c, 0)
    return numCorrect === patternKeys.length
}

export var getComparator = (pattern: any): Function => {
    
    if (typeof pattern === 'function') return pattern
    if (typeof pattern === 'boolean') return (x) => x === pattern
    if (typeof pattern === 'number') return (x) => x === pattern
    if (typeof pattern === 'string') return (x) => x === pattern
    if (typeof pattern === 'object' && pattern.splice !== undefined) return (x) => compareArrays(x, pattern)

    return (x) => compareObjects(x, pattern)
}

export var isMatch = (value: any, pattern: any): boolean => {
    var comparator = getComparator(pattern)
    return comparator(value)
}
