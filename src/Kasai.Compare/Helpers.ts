
export var _ = (x) => true

export var typeOf = (t: string) => (x) => typeof x === t

export var instanceOf = (c) => (x) => x instanceof c
