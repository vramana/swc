//@target: ES6
//@declaration: true
var M;
(function(M) {
    var tmp = Symbol.toPrimitive, tmp1 = Symbol.isConcatSpreadable, tmp2 = Symbol.toPrimitive, tmp3 = Symbol.toPrimitive;
    class C {
        [tmp](x) {
        }
        [tmp1]() {
            return undefined;
        }
        get [tmp2]() {
            return undefined;
        }
        set [tmp3](x) {
        }
    }
    M.C = C;
})(M || (M = {
}));