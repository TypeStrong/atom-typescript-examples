var BigClass = (function () {
    function BigClass() {
    }
    BigClass.prototype.hasAMethod = function () {
        console.log('stuff should go *after* this as implementing interface is fairly *noisy* process.');
    };
    return BigClass;
})();
