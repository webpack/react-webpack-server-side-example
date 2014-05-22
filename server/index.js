var express = require("express");
var path = require("path");
var page = require("./page.generated.js");

var app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", function(req, res) {
	res.end(page(req));
});

var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});