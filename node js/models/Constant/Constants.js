"use strict";
exports.__esModule = true;
exports.Constants = void 0;
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.salaryRegex = /^([0-9]{2,20})$/;
    Constants.nameRegex = /^([a-zA-Z]{2,20})$/;
    Constants.ageRegex = /^([0-9]{1,2})$/;
    Constants.emailRegex =/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,8}\b$/i;
    Constants.mobileRegex = /^([0-9]{10})$/;
    return Constants;
}());
exports.Constants = Constants;
