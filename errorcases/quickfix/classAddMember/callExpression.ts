export class Awesome{
    a = 123; 
    b = '456';
    somethingNotTyped;
    constructor(){
        this.call(this.a,this.b)
    }
} 