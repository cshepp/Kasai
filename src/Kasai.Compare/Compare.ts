
export var compareArrays = (value: any, pattern: any): boolean => {
    var correct = value.map((x, i) => {
        return isMatch(x, pattern[i]) ? 1 : 0
    })

    var numCorrect = correct.reduce((p, c) => p + c, 0);
    return numCorrect === value.length;
}

export var compareObjects = (value: any, pattern: any): boolean => {
    return true
}

export var getComparator = (pattern: any): Function => {

    if(typeof pattern === 'function') return pattern
    if(typeof pattern === 'boolean') return (x) => x === pattern
    if(typeof pattern === 'string') return (x) => x === x
    if(typeof pattern === 'object' && pattern.splice !== undefined) return compareArrays

    return compareObjects
}

export var isMatch = (value: any, pattern: any): boolean => {

    var comparator = getComparator(pattern);
    return comparator(value);
}
