var Test = (function () {
    function Test() {
        this.something = 123;
        var foo = new OtherTest();
        foo.something = 123;
    }
    return Test;
})();
var OtherTest = (function () {
    function OtherTest() {
    }
    return OtherTest;
})();
