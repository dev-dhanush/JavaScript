let a = "hello world";

document.write("<br /> let var a" + a);

const b = 132;

document.write("<br /> const b " + b);

// java script has var as data types

let car = {
	door: 5,
	name: "BMW",
};

document.write(car.door + " " + car.name);

Array.prototype.upperCaseMine = function () {
    console.log(this);
	// for (i of this) {
	// 	console.log(i);
	// 	this[this.indexOf(i)]=i.toUpperCase();
	// 	console.log(i);
	// }

    this.map((i) => {
        this[this.indexOf(i)] = i.toUpperCase()
    })
};

function demoArr() {
	var laptop = ["dell", "lenovo", "asus"];
	document.write("<br /> laptop " + laptop);
	laptop.upperCaseMine();
	document.write("<br /> laptop " + laptop);
}

// Array.prototype.upperCase = function () {
// 	var i;
// 	for (i = 0; i < this.length; i++) {
// 		console.log(this);
// 		this[i] = this[i].toUpperCase();
// 	}
// };

// function demoArr() {
// 	var cars = ["bmw", "ferrari"];
// 	document.write("<br/>" + cars);
// 	cars.upperCase();
// 	document.write("<br/>" + cars);
// 	document.write("<br/>" + cars);
// 	document.write("<br/>" + cars);
// }
