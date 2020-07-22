var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/save-suggestn");
var suggestnSchema = new mongoose.Schema({
    suggestion: String,
});
var User = mongoose.model("User", suggestnSchema);

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });

//The method attribute =post and action attribute shoud have URL "/addsuggestn"
app.post("/addsuggestn", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("suggestion saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});