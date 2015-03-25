function outerFunction() {
    function innerFunction() {
        return true;
    }
}
var Bar = (function () {
    function Bar() {
        this.something = 123;
    }
    return Bar;
})();
