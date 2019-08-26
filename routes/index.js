// var express = require('express');
var router = require('express').Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/index');
});

// google oauth login route 
router.get('/auth/google', passport.authenticate(
  'google', 
  { scope: ['profile', 'email'] }
)); 

router.get('/oauth2callback', passport.authenticate(
  'google', 
  {
    successRedirect: '/index', 
    failureRedirect: '/index' 
    // but could redirect to anywhere.
  }
));

router.get('/logout', function(req, res) {
  req.logout(); 
  res.redirect('/index'); 
})

module.exports = router;
