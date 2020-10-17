// A callback function is simply a function you pass into another function so 
// that function can call it at a later time. This is commonly seen in asynchronous 
// APIs; the API call returns immediately because it is asynchronous

// Callback function: when yo umake a function, when that ends running, call the callback function (a function passed as an input parameter)

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// included as per TA's backend tutorial \/ instructions
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {   //  API says: MongoClient.connect(url, options, callback) -- Connect to MongoDB using a url
  // Re: callback, error is usually passed as the first argument. According to what IDE shows, err: MongoError, db: MongoClient
  if (err) throw err; //  It is best practice to check if err has a value before you do anything else. If so, stop execution of the callback and throw the error (or you could log the error)

  var dbo = db.db("mydb");  // db(dbName, options){Db}  -- Create a new Db instance sharing the current socket connections. 
  var myobj = [
    { name: 'John', address: 'Highway 71' }, //If you do not specify an _id field, then MongoDB will add one for you and assign a unique id for each document.
    { name: 'Peter', address: 'Lowstreet 4' }, // If you do specify the _id field, the value must be unique for each document:
    { name: 'Amy', address: 'Apple st 652' },
    { name: 'Hannah', address: 'Mountain 21' },
    { name: 'Michael', address: 'Valley 345' },
    { name: 'Sandy', address: 'Ocean blvd 2' },
    { name: 'Betty', address: 'Green Grass 1' },
    { name: 'Richard', address: 'Sky st 331' },
    { name: 'Susan', address: 'One way 98' },
    { name: 'Vicky', address: 'Yellow Garden 2' },
    { name: 'Ben', address: 'Park Lane 38' },
    { name: 'William', address: 'Central st 954' },
    { name: 'Chuck', address: 'Main Road 989' },
    { name: 'Viola', address: 'Sideway 1633' }
  ];

  dbo.collection("customers").insertMany(myobj, function (err, res) {
    //insertOne() method is an object containing the name(s) and value(s) of each field in the document you want to insert.
    //It also takes a callback function where you can work with any errors, or the result of the insertion
    //When executing the insertMany() method, a result object is returned. The result object contains information about how the insertion affected the database.
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    console.log(res);
    db.close();
  });
  // dbo.createCollection("customers", function (err, res) {
  //   if (err) throw err;
  //   console.log("Collection created!"); // Important: In MongoDB, a collection is not created until it gets content!
  //   db.close();
  // });

});


// Add an HTTP Header
// If the response from the HTTP server is supposed to be displayed as HTML, 
// you should include an HTTP header with the correct content type:
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('yo');
// }).listen(8080);


// use a module (in same folder) to display date
// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);

// Just repeats hello in prompt
// var myInt = setInterval(function () {
//     console.log("Hello");
// }, 500);


//Read the Query String
//The function passed into the http.createServer() has a req argument that 
//represents the request from the client, as an object 
//(http.IncomingMessage object).
//This object has a property called "url" which holds the part of the url 
//that comes after the domain name: (e.g. "/summer" after "http://localhost:8080/summer")
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   res.end();
// }).listen(8080);

// There are built-in modules to easily split the query string into readable parts,
// such as the URL module.

//Example: Split the query string into readable parts: (e.g. "http://localhost:8080/?year=2017&month=July")
// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);

//eventhandlers
// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// //Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a scream!');
// }

// //Assign the eventhandler to an event:
// eventEmitter.on('scream2', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('scream2');


