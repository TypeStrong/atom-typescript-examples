"use strict"

async function foo(){
	return 123;
}

class Foo{
	async foo(){
		let res = await foo();
		return res;
	}
}

new Foo().foo().then((x)=>console.log(x));
