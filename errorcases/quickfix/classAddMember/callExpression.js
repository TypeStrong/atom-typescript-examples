var Awesome = (function () {
    function Awesome() {
        this.a = 123;
        this.b = '456';
        this.memberFunction(this.a, this.b, this.somethingNotTyped);
    }
    return Awesome;
})();
exports.Awesome = Awesome;
