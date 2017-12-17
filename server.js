var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 4201;

var router = express.Router();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.use(function(req, res, next) {
    console.log('request cought by middlewear');
    next();
});
// all of our routes will be prefixed with /api
app.use('/api', router);

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.get('/test', function(req, res) {
    res.json({ message: 'this is a test' });
});

router.route('/createImage')
    .post(function(req, res) {
        //todo: add canvas to image library
        res.json({ message: 'post request to create an image' });
    });




app.listen(port);
console.log('server started on port ', port);