// exports.myDateTime = function () {
//   return Date();
// };

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");

// dbo.collection("customers").find({}).toArray(function(err, res){
// if (err) throw err;
// console.log(res);
// db.close();
// });

// });

var express = require('express')
var app = express()
 
var router1 = require('./router1')
app.use('/api/', router1)
 
app.get('/aboot', function (req, res) {
  res.send('Aboot birds')
})

// start the server
var server = app.listen(8000, function(){
    console.log('Listening on port 8000...')
})