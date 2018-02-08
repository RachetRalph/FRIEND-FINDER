const path = require("path");

module.exports = function(app){

    // a get route that will display the survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    // A default, catch-all route leads to home page
    app.use("/", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

}