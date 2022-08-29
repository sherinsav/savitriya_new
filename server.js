var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();

// set the view engine to ejs
app.use(express.static('src/public'));
app.set('views', './src/views');
app.use(expressLayouts);
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
// index page
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/mobile-apps', function(req, res) {
  res.render('mobile-apps');
});

app.get('/web-apps', function(req, res) {
    res.render('web-apps');
});

app.get('/design-service', function(req, res) {
    res.render('design-service');
});

app.get('/quality-assurance', function(req, res) {
    res.render('quality-assurance');
});

app.listen(8080);
console.log('Server is listening on port 8080');