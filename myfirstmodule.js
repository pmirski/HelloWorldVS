// exports.myDateTime = function () {
//   return Date();
// };

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

dbo.collection("customers").find({}).toArray(function(err, res){
if (err) throw err;
console.log(res);
db.close();
});
  // dbo.collection("customers").updateOne(myquery, newvalues, function (err, res) {
  //   if (err) throw err;
  //   console.log("1 doc updated");
  //   db.close();
  // });

});