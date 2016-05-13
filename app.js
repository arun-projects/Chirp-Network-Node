//Require modules and models

var express = require("express");
var models = require("./models/index");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();

//Set view engine

app.set("view engine", "ejs");

//Middleware

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(methodOverride("_method"));

app.get("/", function(req, res) {
    res.redirect(301, "/chirps");
});

//Get all chirps
app.get("/chirps", function(req, res) {
    models.Chirp.findAll().then(function(chirps) {
        res.render("index", {
            chirps: chirps
        });
    });
});

//Create new chirp
app.post("/chirps", function(req, res) {
    models.Chirp.create({
        chirp: req.body.chirp
    }).then(function() {
        res.redirect("/chirps");
    });
});

//Get specific chirp
app.get("/chirps/:id/edit", function(req, res) {
    models.Chirp.findById(req.params.id).then(function(chirp) {
        res.render("edit", {
            chirp: chirp
        });
    });
});

//Edit a chirp
app.put("/chirps/:id", function(req, res) {
    models.Chirp.findById(req.params.id).then(function(chirp) {
        chirp.updateAttributes({
            chirp: req.body.chirp
        }).then(function() {
            res.redirect("/chirps");
        });
    });
});

//Delete a chirp
app.delete("/chirps/:id", function(req, res) {
    models.Chirp.findById(req.params.id).then(function(chirp) {
        chirp.destroy().then(function() {
            res.redirect("/chirps");
        });
    });
});

app.listen(process.env.PORT || 3000);
