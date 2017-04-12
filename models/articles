var db = require("../db");
var ObjectID = require("mongodb").ObjectID;

exports.all = function(call) {
    db.get().collection("articles").find().toArray(function (err, docs) {
        call(err, docs);
    })
};
exports.findById = function (id, call) {
    db.get().collection("articles").findOne({_id: ObjectID(id)}, function (err, doc) {
        call(err, doc);
    });
};
exports.create = function (articles, call) {
    db.get().collection("articles").insert(articles, function (err, result) {
        call(err, result);
    });
};
exports.update = function (id, newData, call) {
    db.get().collection("articles").updateOne(
        {_id: ObjectID(id)},
        newData,
        function (err, result) {
            call(err, result);
        }
    );
};
exports.delete = function (id, call) {
    db.get().collection("articles").deleteOne(
        {_id: ObjectID(id)},
        function (err, result) {
            call(err, result)
        }
    );
};