
export var _ = (x) => true

var compareArrays = (value: any, pattern: any): boolean => {
    return true
}

var compareObjects = (value: any, pattern: any): boolean => {
    return true
}

var getComparator = (pattern: any): Function => {

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
