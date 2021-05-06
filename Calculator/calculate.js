var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', (req, res) => {
    res.sendFile(__dirname + ("/index.html"));
});
app.post('/cal', (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The sum of two number is " + result);
});


app.listen(3000, () => {
    console.log("App listen on port 3000");

});