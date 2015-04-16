class Test {
    constructor() {
        this.something = 123;
        var foo = new OtherTest();
        foo.something = 123;
    }
}

class OtherTest {
}
