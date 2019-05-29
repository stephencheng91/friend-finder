//var express = require("express");
//var router = express.Router();

var friendsData = require("../data/friends");
console.log(friendsData);

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        console.log("get");
        res.json(friendsData);

    });

    app.post("/api/friends", function (req, res) {
        //Getting current user
        var newUserName = req.body.name;

        //Loop to each user on the datalist
        for (var i = 0; i < friendsData.length; i++) {
            var user = friendsData[i];

            var scoresDiff = 0;
            for (var j = 0; j < user.scores.length; j++) {
                //Getting the difference between each saved user to current user
                scoresDiff += Math.abs(user.scores[j] - req.body.userValue[j]);
            }
            console.log("user: " + user.name + " Score Diff: " + scoresDiff);

        }
    });

}