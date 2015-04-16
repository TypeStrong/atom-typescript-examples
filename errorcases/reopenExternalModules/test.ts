/// <reference path="./a"/>
/// <reference path="./b"/>

import foo = require("foo");
foo.b = 123; // ERROR: Property b to not exist on type Foo