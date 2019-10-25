var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 2010;

app.use(express.static(__dirname + "/app/assets/css/style.css"));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(express.text());




require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

