var express = require('express');
//var db = require('../database');//import database
var users = require('../database/models/users.js');//import database
var repos = require('../database/models/repos.js');//import database
var helpers = require('../helpers/github.js');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));




app.post('/repos/import', function (req, res) {
  console.log('...............................................')
  var name = req.body.term ;
  console.log('body :' , name)
  users.findOne({name : name} , function(err, data){
    if ( data ) {
      res.statusCode(201).send('name already exist');
    } else {  // this means i don't have the name in my db
      helpers.getReposByUsername(name , function (data) {
      	    //DO STHG to put data in db
            //repos.insertMany(data,)
      		res.status(201).send(JSON.stringify(data[0]));
      	})
    }
  })/*.reject((err)=>{
    console.log('err : ', err)
  })*/
});

app.get('/repos', function (req, res) {
	res.status(200).send('done');
});

  var port = 1128;

app.listen(process.env.PORT || port , function() {
});