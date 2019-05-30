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

        //10 questions, max difference in 1 question is 4, 4*10 =40
        var diff = 40;

        //Loop to each user on the datalist
        for (var i = 0; i < friendsData.length; i++) {
            var user = friendsData[i];
            var scoresDiff = 0;
            for (var j = 0; j < user.scores.length; j++) {
                //Getting the difference between each saved user to current user
                scoresDiff += Math.abs(user.scores[j] - req.body.userValue[j]);
            }
            // console.log("user: " + user.name + " Score Diff: " + scoresDiff);

            if (scoresDiff < diff){
                diff = scoresDiff;
                name = user.name;
                photo = user.photo;
                var output = {
                    name: name,
                    photo: photo,
                    diff: diff
                }
            }
        }
        // console.log("name: "+name+ "Diff: "+ diff);
        
        console.log(output);
        res.json(output);
    });

}