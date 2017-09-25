var express = require('express'); 
var useragent = require('express-useragent');
var bodyParser = require('body-parser');
var request = require('request');
var db = require('../database')

var app = express();
app.use(useragent.express());
app.use(express.static(__dirname + '/../client/dist'));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post('/repos/import', function (req, res) {
  // TODO
  var name = req.body.username;

  request({

  	url: 'https://api.github.com/users/' + name + '/repos',
  	headers: { 'user-agent': 'git-technetium' },
  	json: true
  },function(error, response, body) {
  	var repos = body;
  	for (var i = 0; i < repos.length; i++) {
  		var names = repos[i].full_name.split('/')
  		console.log(names[0],names[1])
  		var  repo = new db({ name : names[0] , repo_name : names[1]} )
  		repo.save(function (err){
  			if(err){
  				console.log('maaaa2')
  			}
  		})
  	}
       		//res.send(body)
       		//console.log( body)

    }); 

});

app.get('/repos', function (req, res) {
  // TODO
  db.find({},function(err,result){
  	console.log(result)
   res.send(JSON.stringify(result))
  })
  
  

});

var port = 1128;

app.listen(port, function() {
	console.log(`listening on port ${port}`);
});

