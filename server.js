var express = require("express");
var http = require('http');
var path = require('path');
var bodyParser = require("body-parser"); //
// var articlesController = require("./controllers/artcls");
var config = require('./config')
    // var db = require("./db");

var app = express();
app.set('port', config.get('port'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// db.connect("mongodb://localhost:27017/myblog", function(err) {
//     if (err) {
//         return console.log(err);
//     }
http.createServer(app).listen(app.get('port'), function() {
    console.log("I am working only for you, my Lord")
});
// });

app.get("/", function(req, res) {
    res.send("Hello my lord. My life is owned you");
});

// app.get("/articles", articlesController.all);

// app.get("/articles/:id", articlesController.findById);

// app.post("/articles", articlesController.create);

// app.put("/articles/:id", articlesController.update);

// app.delete("/articles/:id", articlesController.delete);