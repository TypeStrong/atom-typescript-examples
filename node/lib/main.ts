import a = require('example-typescript-a');

var num = a.foo.a;
var str = a.foo.b;
console.log(num,str)

import bar = require("example-typescript-a/dist/bar");
console.log(bar.bar);

import bas = require("example-typescript-a/dist/bas");
console.log(bas.bas);
