var express = require('express');
var router = express.Router();
var databaseConnection = require("../database_connection");

/* GET users listing. */
router.get('/', function(req, res, next) {
  databaseConnection("book").select().then(function(book){
    res.send(book);
  });
});

module.exports = router;
