var convertible1 = 'This is a part of a string concatenation ' + 123456;
var convertible2 = 'This is a part of a string concatenation ' + 123456 + ' continuing';
var convertible3 = 'This needs to be escaped : ` ' + 123456 + " Also escape ${honestly}";
var convertible4 = ("template strings " + 123 + " should be merged") + ' with strings ' + "by removing their backticks";
var notConvertible = 'something already a string';
var notConvertibleAsItsNumber = 1234356 + 123456789;
