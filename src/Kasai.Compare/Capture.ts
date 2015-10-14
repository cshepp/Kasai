
export class Capture {

	public value: any;

	constructor(value: any, unbundle: boolean = false) {

		this.value = unbundle
			? value.map((v) => v.value).reduce((p, c) => p.concat(c), [])
			: [value]
	}
}

export var $ = (x: any): Capture => new Capture(x);
