var express = require('express');
var db = require('../database');//import database
var helpers = require('../helpers/github.js');
var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {
  // TODO
  helpers.getReposByUsername(req.body , function (data) {
  	    //DO STHG to put data in db
  		//send response
  		res.status(201).send('done');
  	})
  //fetch all repos  : https://api.github.com
  //end res : send all repos array

});

app.get('/repos', function (req, res) {

	res.status(200).send('done');
  //res.render('repos');

});

  var port = 1128;

app.listen(process.env.PORT || port , function() {
  console.log(`listening on port ${port}`);
});

