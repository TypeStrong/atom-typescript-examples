class A {
    foo() {
        return this;
    }
}

class B extends A {
    bar() {
        return this;
    }
}

var b: B;
var x = b.foo().bar();  // Fluent pattern works, type of x is B
