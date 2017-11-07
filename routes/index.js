const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.use(express.static('public'));

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

// router.get("/stylesheets/style.css", function(req, res, next){
//   res.sendFile("/home/oczane/Documents/Grace-Hopper/Junior/twitter-express/public/stylesheets/style.css");
// })

module.exports = router;
