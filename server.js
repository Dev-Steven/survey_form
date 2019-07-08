var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

var form_data = {};

app.get("/", function(request, response){
    response.render("main");
})

app.post("/submit", function(request, response){
    console.log("POST DATA \n\n", request.body)
    form_data["name"] = request.body["name"];
    form_data["location"] = request.body["location"];
    form_data["language"] = request.body["language"];
    form_data["comment"] = request.body["comment"];

    response.redirect("/result");
})

app.get("/result", function(request, response){
    response.render("result", {form_data: form_data});
})

app.listen(8000, function() {
    console.log("listening on port 8000");
  })