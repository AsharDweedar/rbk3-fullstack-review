var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher',{  useMongoClient: true
});

  // TODO: your schema here!


var db = mongoose.connection;
db.on('error', function (error) {
	console.log(error.message);
});
db.once('open', function () {
	console.log('DB is ON');
})


module.exports = db;