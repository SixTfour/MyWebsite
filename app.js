//Set variables for environment
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

//Set Routes
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

//Set server port
app.listen(4000);
console.log('Server is running');