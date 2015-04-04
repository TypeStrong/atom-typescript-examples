exports.foo = 123;
var Awesome = (function () {
    function Awesome() {
    }
    Awesome.prototype.awesome = function (a, b) {
        return 456;
    };
    return Awesome;
})();
