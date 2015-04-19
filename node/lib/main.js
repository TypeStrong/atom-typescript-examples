var a = require('example-typescript-a');
var num = a.foo.a;
var str = a.foo.b;
console.log(num, str);
var bar = require("example-typescript-a/dist/bar");
console.log(bar.bar);
var bas = require("example-typescript-a/dist/bas");
console.log(bas.bas);
