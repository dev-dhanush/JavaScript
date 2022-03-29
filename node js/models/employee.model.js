const mongoose = require('mongoose');

const {Constants} = require("./Constant/Constants.js")

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String
        // required: 'This field is required.'
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    },
    age: {
        type: Number
    },
    salary: {
        type: Number
    }
});
// Custom validation for email
employeeSchema.path('age').validate((val) => {
    emailRegex = Constants.ageRegex;
    return emailRegex.test(val);
}, 'Invalid Age input.');
employeeSchema.path('email').validate((val) => {
    emailRegex = Constants.emailRegex;
    return emailRegex.test(val);
}, 'Invalid EMail input.');
employeeSchema.path('salary').validate((val) => {
    emailRegex = Constants.salaryRegex;
    return emailRegex.test(val);
}, 'Invalid Salary input.');
employeeSchema.path('mobile').validate((val) => {
    emailRegex = Constants.mobileRegex;
    return emailRegex.test(val);
}, 'Invalid Mobile input.');
employeeSchema.path('fullName').validate((val) => {
    emailRegex = Constants.nameRegex;
    return emailRegex.test(val);
}, 'Invalid Name input.');
employeeSchema.path('city').validate((val) => {
    emailRegex = Constants.nameRegex;
    return emailRegex.test(val);
}, 'Invalid city input.');


mongoose.model('Employee', employeeSchema);