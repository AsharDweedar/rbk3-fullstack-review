var db = require('../index.js');
var mongoose = require('mongoose');

var repoSchema = mongoose.Schema({
  id : Number ,
  name : String ,
  users : { type: mongoose.Schema.Types.ObjectId, ref: 'user' } ,
});

var Repo = mongoose.model('Repo', repoSchema);
 
module.exports = Repo;