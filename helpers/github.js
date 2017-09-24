var token = require ('../config.js');
exports.getReposByUsername = function  (userName, CB) {
  $.ajax ({
  	url : ' https://api.github.com/${userName}/repos' ,
  	method : 'GET' ,
  	ContentType : 'application/json',
  	Authorization: `${token}` ,
  	sucess : CB (data)   
  })
}
//something to tell github API that we want the top 25 repos
/*
auth: {
		  user: `${token}`,
		  pass: 'x-oauth-basic',
		  sendImmediately: true
		} ,

		*/