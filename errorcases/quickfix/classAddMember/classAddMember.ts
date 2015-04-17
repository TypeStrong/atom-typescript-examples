class Test {
    constructor() {
        this.something = 123;

        this.foo = new OtherTest();

        this.foo.something = {
            fancy: 123,
            fancier: '123'
        };

        var bar: Foo.Bar;
        bar.foo = 123;
    }
}

module Foo {
    export interface Bar {
    }
}
