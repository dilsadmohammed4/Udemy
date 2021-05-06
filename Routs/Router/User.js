var express = require("express");
var router = express.Router();

router.get('/', (req, res) => {

    res.send("I am in All course.");
});
router.get('/android', (req, res) => {

    res.send("I am in Android course.");
});
router.get('/webdev', (req, res) => {

    res.send("I am in Web dev course.");
});
router.get('/software', (req, res) => {

    res.send("I am in Software course.");
});
module.exports = router;