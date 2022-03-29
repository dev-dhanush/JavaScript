"use strict";
exports.__esModule = true;
exports.Constants = void 0;
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    Constants.numberRegex = /^[0-9]+$/;
    Constants.FNameLNameRegEx = /^([a-zA-Z]{2,20})$/;
    Constants.FullNameRegEx = /^([a-zA-Z]{2,20})$/;
    Constants.BankAccountNameRegEx = /^([a-zA-Z ]{2,60})$/;
    Constants.PasswordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,12}$/;
    Constants.EmailIdRegEx = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,8}\b$/i;
    Constants.ConNoRegEx = /^([0-9]{10})$/;
    Constants.AgeRegEx = /^([0-9]{1,2})$/;
    Constants.AadhaarNoRegEx = /^([0-9]{12})$/;
    Constants.GSTNoRegEx = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    Constants.IndianDrivingLicenseNoRegEx = /^([A-Z]{2,3}[-/0-9]{8,13})$/;
    Constants.IndianVehicleRegNoRegEx = /^([A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{1,4})$/;
    Constants.PincodeRegEx = /^[1-9][0-9]{5,6}$/;
    Constants.PANNoRegEx = /^[A-Z]{3}[ABCFGHLJPT][A-Z][0-9]{4}[A-Z]$/;
    Constants.IFSCCodeRegEx = /^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/;
    Constants.BankAccountNoRegEx = /^([0-9]{9,18})$/;
    Constants.PostTitleRegex = /^(.{30,300})$/;
    Constants.PostDescRegex = /^(.{100,3000})$/;
    Constants.LatitudeLongitude = /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,8})?|180(?:\.0{1,8})?)$/;
    return Constants;
}());
exports.Constants = Constants;
