var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next){
    console.log('request cought by middlewear');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/test', function(req, res){
    res.json({message:'this is a test'});
})

router.route('/createImage')
    .post(function(req, res){
        res.json({message:'post request to create an image'});
    });

// all of our routes will be prefixed with /api
app.use('/api', router);


app.listen(port);
console.log('server started on port ', port);