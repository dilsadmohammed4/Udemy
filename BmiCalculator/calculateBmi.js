const express = require("express");
var bodyParser = require("body-parser");
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', (req, res) => {
    res.sendFile(__dirname + ("/home.html"));
});
app.post('/calculate', (req, res) => {
    var width = parseFloat(req.body.width);
    var height = parseFloat(req.body.height);
    var bmi = width / (height * height);
    res.send("Bmi Value is: " + bmi.toFixed(2));
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})