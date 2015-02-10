var express = require('express'),
    bodyParser = require('body-parser'),
    firebase = require('firebase');

var app = express();
var port = 8666;

var fireUrl = 'https://textsupport-pemba.firebaseio.com/';

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

app.listen(port);