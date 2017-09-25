var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
mongoose.Promise = global.Promise;
var db = mongoose.connection
db.on('open', function () {
    console.log(">>> Connected!");
})
db.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

var repoSchema = mongoose.Schema({
   // id: 102984268,
    name: String,
    repo_name: String
    
});





var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;