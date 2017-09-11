var PORT = 8000;
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var session = require('express-session');
var ejs = require('ejs');
var app = express();



app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'mi_p@55w0rd_3S_muy_r@nd0m050!!y_muy_1337_t@mbi3n'}));

app.use(express.static('static'));

app.set('views', __dirname + '/views');
app.set('viewengine', 'ejs');


app.get('/', function (req, res){
    if (!req.session.visitCount){
        req.session.visitCount = 0;
    }
    req.session.visitCount += 1;
    var count = req.session.visitCount;
    res.render('index.ejs', {'visitCount': count});
});


app.get('/double', function (req, res){
    req.session.visitCount += 1;
    res.redirect('/');
});
  
app.listen(PORT, function(){
    console.log('listening on port '+PORT);
})
