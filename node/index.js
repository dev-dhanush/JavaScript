require('./models/db')
const path = require('path');
var exphbs = require('express-handlebars');
const express = require("express");
app = express();
const mongoose = require("mongoose");

const employee = require('./routes/employee')

app.use(express.json());
app.use("/employee", employee);

app.set('views', path.join(__dirname, '/views/'));
// app.engine('hbs', require('exphbs'));
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');


app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
})

// app.use('/employee', employeeController);
