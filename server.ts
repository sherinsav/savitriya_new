import express from "express";
import expressLayouts from "express-ejs-layouts";
import {pool} from "./src/api/utils/mysql.connector";
const app = express();

// set the view engine to ejs
app.use(express.static('src/public'));
app.set('views', './src/views');
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('index', {data: shopDetails[0]});
    });
});

app.get('/mobile-apps', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('mobile-apps', {data: shopDetails[0]});
    });
});

app.get('/web-apps', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('web-apps', {data: shopDetails[0]});
    });
});

app.get('/design-service', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('design-service', {data: shopDetails[0]});
    });
});

app.get('/quality-assurance', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('quality-assurance', {data: shopDetails[0]});
    });
});

app.get('/ios-app-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('ios-app-development', {data: shopDetails[0]});
    });
});

app.listen(8080);
console.log('Server is listening on port 8080');