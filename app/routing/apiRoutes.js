const friendList = require('../data/friend.js');



      // Question: What does this code do??       
      $.post("/api/new", newCharacter)       
      .then(function(data) {         
          console.log(data);         
          alert("Adding character...");       
        });     
  


// AJAX post the data to the friends API.
$.post("/api/friends", userData)
.then(function (data) {

    // Grab the result from the AJAX post so that the best match's name and photo are displayed.
    $("#match-name").text(data.name);
    $("#match-img").attr("src", data.photo);

    // Show the modal with the best match
    $("#results-modal").modal("toggle");


            } else {
    alert("Please fill out all fields before submitting!");
}

});