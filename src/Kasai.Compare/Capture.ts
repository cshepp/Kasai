
export class Capture {

	public value: any;

	constructor(value: any) {

		let arr = []

		let v = value
		if (value instanceof Capture) { 
			v = value.value
		}

		if (v.splice === undefined) { 
			v = [v]
		}

		for (var i = 0; i < v.length; i++) {
			if (v[i] instanceof Capture) {
				arr = arr.concat(v[i].value)
			}
			else {
				arr.push(v[i])
			}
		}

		this.value = arr
	}
}

export var $ = (x: any): Capture => new Capture(x);
