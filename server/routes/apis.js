var express = require('express');
var router = express.Router();

var configfile = require("../../config");
var configtoken = configfile["token"];

router.get('/adminUserList', function(req, res) {
  var tokenid = req.query.token;
  if(tokenid === configtoken){
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
  }else{
    res.send('');
  }
});
/*
* POST to adduser.
*/
router.post('/adduser', function(req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  collection.insert(req.body, function(err, result){
      res.send(
          (err === null) ? { msg: '' } : { msg: err }
      );
  });
});

module.exports = router;
