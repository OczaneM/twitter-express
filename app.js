const express = require('express');
const app = express();
// const bodyParser = require('body-parser');

app.use(function (req, res, next) {
	console.log(req.method + req.path);
	next();
});


// app.post()


app.get('/', function (req, res, next) {
	res.send('Welcome!');
	next();
});

app.get('/news', function (req, res, next) {
	res.send('Welcome to the not news page!');
	next();
});




app.listen(3000, function() {
	console.log('Server listening');
});