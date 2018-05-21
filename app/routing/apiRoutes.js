var friendsArray = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
      res.json(friendsArray);
    });

    app.post("/api/friends", function(req, res) {
        var friend = req.body.scores;
        var diff = 10000000;
        var index;
        for(i=0;i<friendsArray.length;i++){
            var value = 0;
            for(j=0;j<10;j++){
                value+= Math.abs(parseInt(friend[j])-parseInt(friendsArray[i].scores[j]));
                console.log(friend[j]+"-"+friendsArray[i].scores[j]);
                console.log(value);
            }
            if(value < diff){
                diff = value;
                index = i
            }
        }

        friendsArray.push(req.body);
        res.json(friendsArray[index]);
    
    });
};