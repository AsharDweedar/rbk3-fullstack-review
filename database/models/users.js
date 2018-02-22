var db = require('../index.js');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise
var userSchema = mongoose.Schema({
  id : Number ,
  name : String 
});
 
module.exports = mongoose.model('users', userSchema);