var express = require('express'),
    bodyParser = require('body-parser'),
    firebase = require('firebase');

// var accountSid = 'ACef00d610b52418fd7d3153d92501e84c';
// var authToken = '4938ce67e087f6a8a332deb4f1034558';

// var client = require('twilio')(accountSid, authToken);

var app = express();
var port = 8666;

var fireUrl = 'https://textsupport-pemba.firebaseio.com/';

app.use(express.static(__dirname+'/public'));

app.use(bodyParser.json());

app.listen(port);