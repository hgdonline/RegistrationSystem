var express = require('express');
var router = express.Router();

// fetch webpack production name
var mymanifest = require("../public/static/js/my-manifest");
var exportFileName = mymanifest["main.js"];
var filestring = '<script src="/static/js/' + exportFileName + '"></script>'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{ jsfile:filestring});
});

module.exports = router;
