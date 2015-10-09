var Capture = (function () {
    function Capture(value) {
        var x = [];
        if (value instanceof Capture) {
            x = x.concat(value.value);
        }
        else if (typeof value === 'object' && value.splice !== undefined) {
            for (var i = 0; i < value.length; i++) {
                if (value[i] instanceof Capture) {
                    x = x.concat(value[i].value);
                }
                else {
                    x.push(value[i]);
                }
            }
        }
        else {
            x.push(value);
        }
        this.value = x;
    }
    return Capture;
})();
exports.Capture = Capture;
exports.$ = function (x) { return new Capture(x); };
