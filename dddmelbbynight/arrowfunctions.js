function Person(age) {
    this.age = age;
    this.growOld = function () {
        this.age++;
    };
}
var person = new Person(1);
setTimeout(person.growOld, 1000);
setTimeout(function () { console.log(person.age); }, 2000);
var test2;
(function (test2) {
    function Person(age) {
        var _this = this;
        this.age = age;
        this.growOld = function () {
            _this.age++;
        };
    }
    var person = new Person(1);
    setTimeout(person.growOld, 1000);
    setTimeout(function () { console.log(person.age); }, 2000);
})(test2 || (test2 = {}));
