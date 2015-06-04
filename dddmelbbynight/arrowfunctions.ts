function Person(age) {
    this.age = age
    this.growOld = function() {
        this.age++;
    }
}
var person = new Person(1);
setTimeout(person.growOld, 1000);

setTimeout(function() { console.log(person.age); }, 2000); // 1, should have been 2



















module test2 {

    function Person(age) {
        this.age = age
        this.growOld = () => {
            this.age++;
        }
    }
    var person = new Person(1);
    setTimeout(person.growOld, 1000);

    setTimeout(function() { console.log(person.age); }, 2000); // 1, should have been 2
}







