var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Gateway_language_bible = require('../models/gateway_language_bible');

module.exports = router

/* GET Home Page */
router.get('/', function(req, res){
  var authUser = req.session.user
  console.log(authUser);
  console.log("auth");
  return res.render('home', { gateway_language_bible: Gateway_language_bible.info(authUser) });
});

router.post('/create_bible', function(req, res){
  var authUser = req.session.user
  console.log(authUser);
  var body = {
    "bibleId": req.body.bibleid,
    "version": req.body.version,
    "langCode": req.body.langcode,
    "bibleUrl": req.body.bibleUrl
  };
  console.log(body);
    return res.render('home', { gateway_language_formData: Gateway_language_bible.info(authUser, body) });
});


/* GET Home Page */
router.get('/home', function(req, res){
  var authUser = req.session.user
  return res.render('home', { user: User.info(authUser) });
});

/* GET Book Page */
router.get('/books', function(req, res){
  res.render('books');
});

/* GET Chapter Page */
router.get('/chapters', function(req, res){
  res.render('chapters');
});

/* GET Bible Page */
router.get('/bible', function(req, res){
  res.render('bible');
});

