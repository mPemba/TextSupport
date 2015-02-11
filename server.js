var express = require('express'),
    bodyParser = require('body-parser'),
    firebase = require('firebase');

var accountSid = 'ACef00d610b52418fd7d3153d92501e84c';
var authToken = '4938ce67e087f6a8a332deb4f1034558';

var twilio = require('twilio')(accountSid, authToken);

var app = express();
var port = 8666;

var fireUrl = 'https://textsupport-pemba.firebaseio.com/';

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS GET POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Control-Type, Accept');
	next();
})

app.use(express.static(__dirname+'/public'));

app.use(bodyParser.json());

app.post('/support/messages', function(req, res) {
	twilio.sendMessage({
	    to: '+18016969988',
	    from: '+18013053669',
	    body: 'creep on creepin on'
    }, function(err, responseData) {
	    if (!err) {
	    	console.log(responseData.from);
	    	console.log(responseData.body);
	    	return res.status(444).end();
	    } else {
	    	return res.status(200).json(responseData);
	    }
    })
});

app.listen(port);