var Capture = (function () {
    function Capture(value, unbundle) {
        if (unbundle === void 0) { unbundle = false; }
        this.value = unbundle
            ? value.map(function (v) { return v.value; }).reduce(function (p, c) { return p.concat(c); }, [])
            : [value];
    }
    return Capture;
})();
exports.Capture = Capture;
exports.$ = function (x) { return new Capture(x); };
