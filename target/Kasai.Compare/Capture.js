var Capture = (function () {
    function Capture(value) {
        var arr = [];
        var v = value;
        if (value instanceof Capture) {
            v = value.value;
        }
        if (v.splice === undefined) {
            v = [v];
        }
        for (var i = 0; i < v.length; i++) {
            if (v[i] instanceof Capture) {
                arr = arr.concat(v[i].value);
            }
            else {
                arr.push(v[i]);
            }
        }
        this.value = arr;
    }
    return Capture;
})();
exports.Capture = Capture;
exports.$ = function (x) { return new Capture(x); };
