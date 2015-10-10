var Capture = (function () {
    function Capture(value) {
        var x = [];
        // if (value instanceof Capture) {
        // 	x = x.concat(value.value)
        // }
        // else if (typeof value === 'object' && value.splice !== undefined) {
        // 	for (var i = 0; i < value.length; i++) {
        // 		if (value[i] instanceof Capture) {
        // 			x = x.concat(value[i].value)
        // 		}
        // 		else {
        // 			x.push(value[i])
        // 		}
        // 	}
        // }
        // else {
        // 	x.push(value)
        // }
        // this.value = x
        var v = value;
        if (value instanceof Capture) {
            v = value.value;
        }
        if (v.splice === undefined) {
            v = [v];
        }
        for (var i = 0; i < v.length; i++) {
            if (v[i] instanceof Capture) {
                x = x.concat(v[i].value);
            }
            else {
                x.push(v[i]);
            }
        }
        this.value = x;
    }
    return Capture;
})();
exports.Capture = Capture;
exports.$ = function (x) { return new Capture(x); };
