var express = require('express');
var router = express.Router();
var TokenCTRL = require('..//controllers/token.controllers.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Create a token
router.post('/newtok', function(req, res) {
  return TokenCTRL.create(req,res);
});

//Get a token
router.get('/gettok', function(req, res) {
  var tokno1 = parseInt(req.query.tokno);
  return TokenCTRL.getaTok(req,res,tokno1);
});

//Get all token
router.get('/getalltok', function(req, res) {
  return TokenCTRL.getallTok(req,res);
});

// Get Current Token
router.get('/getcurrenttok', function(req, res) {
  return TokenCTRL.getacurTok(req,res);
});

//update current token
router.put("/updateCurrentToken",function(req,res){
  return TokenCTRL.updatecurrent(req,res);
});
module.exports = router;
