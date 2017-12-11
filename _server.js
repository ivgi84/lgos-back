var express = require('express');
var handlebars = require('express-handlebars');
var app = express();

var port = 5000;

app.use(express.static('public'));
//app.use(express.static('./src/views')); in case we want just to serve a static view
app.set('views', './src/views'); // here we set a variavle views, that node will know where to take the views from

app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');


app.get('/', function(req, res) {
    res.render('index', { title: 'Some title came from node', list: ['one ', 'two ', 'three ', 'four '] });
});

app.get('/books', function(req, res) {
    res.send('Hello Books');
})

app.listen(port, function(err) {
    console.log('running server on port ' + port);
})