exports.getReposByUsername = function  (userName, CB) {
  $.ajax ({
  	url : ' https://api.github.com/${req.body}/repos' ,
  	method : 'GET' ,
  	//something to tell github API that we want the top 25 repos
  	sucess : CB (data)   
  })
}