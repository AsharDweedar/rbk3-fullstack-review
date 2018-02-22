var token = require('../config.js');
var $ = require('jquery');
var db = require('../database/index.js');
var request = require('request');

var getReposByUsername = function  (userName, CB) {
	var obj= {
            url : `https://api.github.com/users/${userName}/repos` ,
            headers : {
              sort : 'update' ,
              "User-Agent" : "AsharDweedar"
            }
          }
   request( obj, function (error, response, body) {
          CB(JSON.stringify(body))

  })
}

exports.getReposByUsername = getReposByUsername;

//.then(CB (data)).catch((err) => {console.log('error :', err.message)})
//Authorization: `${token}` ,
//something to tell github API that we want the top 25 repos
