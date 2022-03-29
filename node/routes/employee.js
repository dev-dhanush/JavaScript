const express = require("express");
const router = express.Router();
const { employeeController } = require("../controller/employeeController");
const mongoose = require("mongoose");
const Employee = mongoose.model("Employee");

router.get("/employee", employeeController);

router.get("/", (req, res) => {
	res.render("employee/addOrEdit", {
		viewTitle: "Insert Employee",
	});
});

router.post("/", (req, res) => {
	if (req.body._id == "") insertRecord(req, res);
	else updateRecord(req, res);
});

const insertRecord = (req, res) => {
	let employee = new Employee();
	employee.name = req.body.name;
	employee.email = req.body.email;
	employee.salary = req.body.salary;
	employee.city = req.body.city;
	employee.age = req.body.age;
	employee.save((err, doc) => {
		if (!err) {
			res.redirect("employee/list");
		} else {
			if (err.name == "ValidationError") {
				handleValidationError(err, req.body);
				res.render("employee/addOrEdit", {
					viewTitle: "Insert Employee",
					employee: req.body,
				});
			} else console.log("Error during record insertion : " + err);
		}
	});
};

function updateRecord(req, res) {
	Employee.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
		if (!err) {
			res.redirect("employee/list");
		} else {
			if (err.name == "ValidationError") {
				handleValidationError(err, req.body);
				res.render("employee/addOrEdit", {
					viewTitle: "Update Employee",
					employee: req.body,
				});
			} else console.log("Error during record update : " + err);
		}
	});
}

router.get("/list", (req, res) => {
	Employee.find((err, docs) => {
		if (!err) {
			res.render("employee/list", {
				list: docs[0]
			});
		} else {
			console.log("Error in retrieving employee list :" + err);
		}
	});
});

function handleValidationError(err, body) {
	for (field in err.errors) {
		switch (err.errors[field].path) {
			case "name":
				body["nameError"] = err.errors[field].message;
				break;
			case "age":
				body["ageError"] = err.errors[field].message;
				break;
			case "salary":
				body["salaryError"] = err.errors[field].message;
				break;
			case "city":
				body["cityError"] = err.errors[field].message;
				break;
			case "email":
				body["emailError"] = err.errors[field].message;
				break;
			default:
				break;
		}
	}
}

router.get("/:id", (req, res) => {
	Employee.findById(req.params.id, (err, doc) => {
		if (!err) {
			res.render("employee/addOrEdit", {
				viewTitle: "Update Employee",
				employee: doc,
			});
		}
	});
});

router.get("/delete/:id", (req, res) => {
	Employee.findByIdAndRemove(req.params.id, (err, doc) => {
		if (!err) {
			res.redirect("/employee/list");
		} else {
			console.log("Error in employee delete :" + err);
		}
	});
});


module.exports = router;
