var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var B = (function () {
    function B() {
        this.value = 2;
        this.str = ['abc', 'bbc'];
    }
    return B;
})();
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.apply(this, arguments);
        this.value = 5;
        this.str2 = "10";
    }
    return C;
})(B);
