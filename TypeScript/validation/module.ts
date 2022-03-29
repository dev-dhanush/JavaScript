import { Constants } from "./constants/constants";
import { Validator } from "./validators/validator";

let email = "abhishekpoojara@gmail.com";
let zipCode = "382421";
let age = 15;
let firstName = "dhanush";
let lastName = "patel";
let password = "as@123aASDF";
let contact = "123654987";

let validator = new Validator();

let resultOfEmailValidate = validator.isValidString(email,Constants.emailRegex,3,200);
let resultOfPasswordValidate = validator.isValidString(password,Constants.PasswordRegEx,8,20);
let resultOfAgeValidate = validator.isValidString(age.toString(),Constants.numberRegex,1,3);
let resultOfZipCodeValidate = validator.isValidString(zipCode,Constants.numberRegex,6);
let resultOfContactValidate = validator.isValidString(contact,Constants.numberRegex,10);
let resultOfFirstNameValidate = validator.isValidString(firstName,Constants.FullNameRegEx,2,20);
let resultOfLastNameValidate = validator.isValidString(lastName,Constants.FNameLNameRegEx,2,20);



console.log("Valid Email Id OR Not: " + resultOfEmailValidate);
console.log("Valid Age OR Not: " + resultOfAgeValidate);
console.log("Valid Password OR Not: " + resultOfPasswordValidate);
console.log("Valid Zip Code OR Not: " + resultOfZipCodeValidate);
console.log("Valid Contact OR Not: " + resultOfContactValidate);
console.log("Valid FirstName OR Not: " + resultOfFirstNameValidate);
console.log("Valid LastName OR Not: " + resultOfLastNameValidate);
