"use strict";
exports.__esModule = true;
var Mobile = /** @class */ (function () {
    function Mobile(mobileId, mobileName, mobileCost) {
        this.mobileId = mobileId;
        this.mobileName = mobileName;
        this.mobileCost = mobileCost;
    }
    Mobile.prototype.printMobileDetail = function () {
        console.log("Id is", this.mobileId);
        console.log("Name is", this.mobileName);
        console.log("Cost is", this.mobileCost);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
