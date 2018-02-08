import { userInfo } from 'os';

// Pull in required dependencies
const path = require('path');
// Import the list of friend entries
const friends = require('../data/friends.js');


module.exports = (app) => {
    // A GET route that displays all friends in a JSON format
    app.get("/api/friends", function(req,res){
        res.json(userInfo);
    });

    // A POST route to handle incoming survey results & compatabilty logic
    app.post("/api/friends", function(req,res){

        let newHomie = {
            name: req.body.name,
            photo: req.body.img,
            scores: []
        };

        let scoreArr = [];
        for(var i=0; i < req.body.scores.length; i++){
            scoreArr.push(parseInt(req.body.scores[i]))
        }
        newHomie.scores = scoreArr;

        
    });   // End of post route

}