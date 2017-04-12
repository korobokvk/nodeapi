var Article = require("../models/articles");

exports.all = function (req, res) {
  Article.all(function (err, docs) {
      if(err) {
          console.log(err);
          return res.sendStatus(500);
      }
      res.send(docs);
  })
};

exports.findById = function (req, res) {
    Article.findById(req.params.id, function (err, doc) {
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
};
exports.create = function (req, res) {
    var article = {
        name: req.body.name
    };
    Article.create(article, function (err, result) {
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(article);
    })
};
exports.update = function (req, res) {
    Article.update(req.params.id, {name: req.body.name}, function(err, result) {
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
};
exports.delete = function(req, res) {
    Article.delete(req.params.id, function (err, result) {
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
};