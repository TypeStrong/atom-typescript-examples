var Awesome = (function () {
    function Awesome() {
        this.a = 123;
        this.b = '456';
        this.call(this.a, this.b);
    }
    return Awesome;
})();
exports.Awesome = Awesome;
