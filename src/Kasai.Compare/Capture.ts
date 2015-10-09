
export class Capture {

	public value: any;

	constructor(value: any) {

		let x = []

		if (value instanceof Capture) {
			x = x.concat(value.value)
		}
		else if (typeof value === 'object' && value.splice !== undefined) {
			for (var i = 0; i < value.length; i++) {
				if (value[i] instanceof Capture) {
					x = x.concat(value[i].value)
				}
				else {
					x.push(value[i])
				}
			}
		}
		else {
			x.push(value)
		}

		this.value = x
	}
}

export var $ = (x: any): Capture => new Capture(x);
