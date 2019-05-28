//var express = require("express");
//var router = express.Router();

var friendsData = require("../data/friends")
console.log(friendsData)

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        console.log("get");
        res.json(friendsData);

    });

    app.post("/api/friends", function (req, res) {
        var user = req.body;
        friendsData.push(user);

    });

}