'use strict';
var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');
var client = require('../db/index.js');

module.exports = function makeRouterWithSockets (io) {


  //a reusable function
  // function respondWithAllTweets (req, res, next){
  //   var allTheTweets = tweetBank.list();
  //   res.render('index', {
  //     title: 'Twitter.js',
  //     tweets: allTheTweets,
  //     showForm: true
  //   });
  // }

  // here we basically treet the root view and tweets view as identical
  router.get('/', function(req, res, next){
    client.query('SELECT * FROM tweets JOIN users ON users.id=tweets.user_id', function (err, result) {
    if (err) return next(err); // pass errors to Express
    var tweets = result.rows;
    console.log(tweets);
    res.render('index', { title: 'Twitter.js', tweets: tweets, showForm: true });
    });
  });

  router.get('/tweets', function(req, res, next){
    client.query('SELECT * FROM tweets JOIN users ON users.id=tweets.user_id', function (err, result) {
    if (err) return next(err); // pass errors to Express
    var tweets = result.rows;
    res.render('index', { title: 'Twitter.js', tweets: tweets, showForm: true });
    });
  });

  // single-user page
  router.get('/users/:username', function(req, res, next){
    // user and tweets table
    // when user is clicked, show user's tweets
    // get specific user from database
    client.query('SELECT * FROM tweets JOIN users ON users.id=tweets.user_id WHERE users.name=$1', [req.params.username], function (err, result) {
    if (err) return next(err); // pass errors to Express
    var tweets = result.rows;
    console.log(tweets);
    res.render('index', { title: 'Twitter.js', tweets:tweets, showForm:true });
    });
  });

  // single-tweet page
  router.get('/tweets/:id', function(req, res, next){
    client.query('SELECT * FROM tweets WHERE tweets.id=$1', [req.params.id], function (err, result) {
    if (err) return next(err); // pass errors to Express
    var tweets = result.rows;
    console.log(tweets);
    res.render('index', { title: 'Twitter.js', tweets:tweets, showForm:true });
    });
  });

  // create a new tweet
  router.post('/tweets', function(req, res, next){
  });

  // replaced this hard-coded route with general static routing in app.js
  router.get('/stylesheets/style.css', function(req, res, next){
    res.sendFile('/stylesheets/style.css', { root: __dirname + '/../public/' });
  });



  return router;
}
