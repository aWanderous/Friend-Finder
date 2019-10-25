var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 2010;

require("./app/routing/html-routes.js")(app);
require("./app/routing/api-routes.js")(app);

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(express.text());


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

