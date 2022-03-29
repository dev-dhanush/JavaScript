const {Constants} = require("../constants/constant");
const { Schema, model } = require( "mongoose" );

const employeeSchema = new Schema({
	name: { type: String, required: "field required" },
	email: { type: String, required: "field required" },
	age: { type: Number, required: "field required" },
	city: { type: String, required: "field required" },
	salary: { type: Number, required: "field required" },
});

employeeSchema.path("name").validate((val) => {
	return Constants.nameRegex.test(val);
}, "Invalid name");
employeeSchema.path("email").validate((val) => {
	return Constants.emailRegex.test(val);
}, "Invalid e-mail.");
employeeSchema.path("age").validate((val) => {
	return Constants.ageRegex.test(val);
}, "Invalid age");
employeeSchema.path("city").validate((val) => {
	return Constants.cityRegex.test(val);
}, "Invalid city");
employeeSchema.path("salary").validate((val) => {
	return Constants.salaryRegex.test(val);
}, "Invalid salary");

model("Employee", employeeSchema);
