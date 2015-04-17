var Test = (function () {
    function Test() {
        this.something = 123;
        var foo = new OtherTest();
        foo.something = {
            fancy: 123,
            fancier: '123'
        };
        this.foo = new OtherTest();
    }
    return Test;
})();
