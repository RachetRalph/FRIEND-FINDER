console.log('API Route Connected Successfully');

// Pull in required dependencies
const path = require('path');
// Import the list of friend entries
const friendList = require('../data/friends.js');


module.exports = (app) => {
    // A GET route that displays all friends in a JSON format
    app.get("/api/friends", function(req,res){
        res.json(friendList);
    }); // End of GET route

    // A POST route to handle incoming survey results & compatabilty logic
    app.post("/api/friends", function(req,res){

        let newHomieScores = req.body.scores;
        let scoreArr = [];
        let homieCount = 0;
        let bestie = 0;

        for(let i=0; i < friendList.length; i++){
            let scoreDiffr = 0;

        for(let r=0; r < newHomieScores.length; r++){
            scoreDiffr += (Math.abs(parseInt(friendList[i].scores[r]) - parseInt(newHomieScores[r])));
        }
        // Pushing results into scoreArray 
        scoreArr.push(scoreDiffr);
        }
        
        // Finding best match after comparison 
        for(let i=0; i < scoreArr.length; i++){
            if(scoreArr[i] <= scoreArr[bestie]){
                bestie = i;
            }
        }
        //  return bestie data
        let bff = friendList[bestie];
        res.json(bff);

        // pushes new submission into FriendsList array 
        friendList.push(req.body);


    });   // End of post route

};