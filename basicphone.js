"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Mobile_1 = require("./Mobile");
var Basicphone = /** @class */ (function (_super) {
    __extends(Basicphone, _super);
    function Basicphone(mobileId, mobileName, mobileCost, mobileType) {
        var _this = _super.call(this, mobileId, mobileName, mobileCost) || this;
        _this.mobileType = mobileType;
        console.log("mobile type is ", _this.mobileType);
        return _this;
    }
    return Basicphone;
}(Mobile_1.Mobile));
var v = new Basicphone(101, 'Samsung', 50000, 'basic');
v.printMobileDetail();
var arraynew = [12, 154];
console.log(arraynew);
