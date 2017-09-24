var express = require('express');
var db = require('../database');//import database
var helpers = require('../helpers/github.js');
var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {
  helpers.getReposByUsername(req.body , function (data) {
    console.log('esahar')
  	    //DO STHG to put data in db
  		res.status(201).send('done');
  	})
});

app.get('/repos', function (req, res) {
	res.status(200).send('done');
});

  var port = 1128;

app.listen(process.env.PORT || port , function() {
  console.log(`listening on port ${port}`);
});

