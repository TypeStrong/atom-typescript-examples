class Test {
    constructor() {
        this.something = 123;
        var foo = new OtherTest();
        foo.something = {
            fancy: 123,
            fancier: '123'
        };
    }
}
