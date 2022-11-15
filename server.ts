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
        res.render('index', {data: shopDetails[0], title: "Savitriya Technologies | A Web and Mobile Software Development Company"});
    });
});

app.get('/mobile-apps', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('mobile-apps', {data: shopDetails[0], title: "Mobile App Development Services | Savitriya Technologies"});
    });
});

app.get('/web-apps', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('web-apps', {data: shopDetails[0], title: "Web Development Company | Savitriya Technologies"});
    });
});

app.get('/design-service', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('design-service', {data: shopDetails[0], title: "User Centric Design Services | Savitriya Technologies"});
    });
});

app.get('/quality-assurance', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('quality-assurance', {data: shopDetails[0], title: "Quality Assurance | Savitriya Technologies"});
    });
});

app.get('/ios-app-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('ios-app-development', {data: shopDetails[0], title: "iOS Application Development | Savitriya Technologies"});
    });
});
app.get('/android-app-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('android-app-development', {data: shopDetails[0], title: "Android App Development | Savitriya Technologies"});
    });
});
app.get('/react-native-app', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('react-native-app', {data: shopDetails[0], title: "React Native Application Development | Savitriya Technologies"});
    });
});
app.get('/flutter-app', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('flutter-app', {data: shopDetails[0], title: "Flutter Application Development | Savitriya Technologies"});
    });
});
app.get('/ionic-app', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('ionic-app', {data: shopDetails[0], title: "Ionic Application Development | Savitriya Technologies"});
    });
});
app.get('/angularjs-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('angularjs-development', {data: shopDetails[0], title: "AngularJS Development Company | Savitriya Technologies"});
    });
});
app.get('/reactjs-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('reactjs-development', {data: shopDetails[0], title: "ReactJS Development Company | Savitriya Technologies"});
    });
});
app.get('/vuejs-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('vuejs-development', {data: shopDetails[0], title: "VueJS Development Company | Savitriya Technologies"});
    });
});
app.get('/typescript-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('typescript-development', {data: shopDetails[0], title: "Typescript Development Company | Savitriya Technologies"});
    });
});
app.get('/html5-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('html5-development', {data: shopDetails[0], title: "HTML5 Development Company | Savitriya Technologies"});
    });
});
app.get('/java-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('java-development', {data: shopDetails[0], title: "Java Development Company | Savitriya Technologies"});
    });
});
app.get('/node-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('node-development', {data: shopDetails[0], title: "Node Development Company | Savitriya Technologies"});
    });
});
app.get('/python-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('python-development', {data: shopDetails[0], title: "Python Development Company | Savitriya Technologies"});
    });
});
app.get('/php-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('php-development', {data: shopDetails[0], title: "Python Development Company | Savitriya Technologies"});
    });
});
app.get('/laravel-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('laravel-development', {data: shopDetails[0], title: "Laravel Application Development Company | Savitriya Technologies"});
    });
});
app.get('/ruby-on-rails-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('ruby-on-rails-development', {data: shopDetails[0], title: "Ruby on Rails Development Company | Savitriya Technologies"});
    });
});
app.get('/mongodb-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('mongodb-development', {data: shopDetails[0], title: "MongoDB Development Company | Savitriya Technologies"});
    });
});
app.get('/mysql-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('mysql-development', {data: shopDetails[0], title: "MySQL Development Company | Savitriya Technologies"});
    });
});
app.get('/aws-cloud-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('aws-cloud-development', {data: shopDetails[0], title: "AWS Cloud Development Company | Savitriya Technologies"});
    });
});
app.get('/docker-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('docker-development', {data: shopDetails[0], title: "Docker Development Company | Savitriya Technologies"});
    });
});
app.get('/azure-cloud-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('azure-cloud-development', {data: shopDetails[0], title: "Azure Cloud Development Company | Savitriya Technologies"});
    });
});
app.get('/drupal-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('drupal-development', {data: shopDetails[0], title: "Drupal Development Company | Savitriya Technologies"});
    });
});
app.get('/wordpress-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('wordpress-development', {data: shopDetails[0], title: "Wordpress Development Company | Savitriya Technologies"});
    });
});
app.get('/magento-development', function(req, res) {
    pool.query('SELECT * FROM shop ORDER BY shop_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        let shopDetails = JSON.parse(JSON.stringify(results));
        res.render('magento-development', {data: shopDetails[0], title: "Magento Development Company | Savitriya Technologies"});
    });
});

app.listen(8080);
console.log('Server is listening on port 8080');