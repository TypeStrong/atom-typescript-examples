export class Awesome {
    a = 123;
    b = '456';
    somethingNotTyped;
    
    constructor() {
        this.memberFunction(this.a, this.b, this.somethingNotTyped);
    }
} 