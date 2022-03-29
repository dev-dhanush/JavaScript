const mongoose = require("mongoose");
const Employee = mongoose.model("Employee");

exports.employeeController = (req, res) => {
	res.send("you got here");
};
