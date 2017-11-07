const express = require('express');
const app = express();
const nunjucks = require('nunjucks'); 
const people = [{name: 'Full'}, {name:'Stacker'}, {name: 'Son'}];
// const bodyParser = require('body-parser');


app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', {noCache: true});

// res.render('index', {title: 'Hall of Fame', people: people});


app.use(function (req, res, next) {
	console.log(req.method + req.path);
	next();
});


// app.post()


app.get('/', function (req, res, next) {
	res.render('index', {title: 'Hall of Fame', people: people});
});


app.get('/news', function (req, res, next) {
	res.send('Welcome to the not news page!');
});




app.listen(3000, function() {
	console.log('Server listening');
});










// nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
// 	console.log(output);
// });

