declare module 'withDist/javascript/bar' {
    export var bar: any;

}
declare module 'withDist/javascript/bas' {
    export var bas: any;

}
declare module 'withDist/javascript/foo' {
    export var foo: any;

}
declare module 'withDis' {
    import _ = require('withDist/javascript/foo');
    export = _;
}
