"use strict"
class Foo{
	async foo(){
		return 123;
	}
}

new Foo().foo().then((x)=>console.log(x));

async function foo(){
	return 123;
}
foo().then((x)=>console.log(x));
