var express = require("express");
var courses = require("./Router/User");
var app = express();
app.use('/course', courses);
app.use('/', (req, res) => {
    res.send("Register course");
});
app.listen('3000', () => {
    console.log("server running port 3000");
});