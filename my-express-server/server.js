var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
var birds = require('./Router/birds')
const port = 3000
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/home.html'));
})
app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname + '/lForm.html'));
})
app.post('/submit-form', (req, res) => {
    const name1 = req.body.nam;
    var phNo = req.body.number;
    res.send('<h1>Name: ' + name1 + '</h1>' + '<br>' + '<h1>Number: ' + phNo + '</h1>');
    res.end();
})
app.use('/birds', birds)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})