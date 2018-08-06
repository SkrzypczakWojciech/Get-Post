var fs = require('fs')
var express = require('express');
var app = express();
var stringifyFile ='';
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
    fs.readFile('./test.json', 'utf8', function(err, data) {
	    if (err) throw err;
	    stringifyFile = data;
	    res.send(data);
	});
});

app.post('/upload/:id', function (req, res) {
    fs.writeFile('./test.json',stringifyFile, function(err) {
	    if (err) throw err;
	    stringifyFile = req.params.id;
	});
});

app.listen(3000);