var Test = (function () {
    function Test() {
        this.something = 123;
        this.foo = new OtherTest();
        this.foo.something = {
            fancy: 123,
            fancier: '123'
        };
        var bar;
        bar.foo = 123;
    }
    return Test;
})();
