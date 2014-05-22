/** @jsx React.DOM */

var React = require("react");

var Application = require("../app/Application");

var hash = require("./build.generated.json").hash;

var styleCollector = require("./style-collector");

module.exports = function(req) {

	var html;
	var css = styleCollector.collect(function() {
		html = React.renderComponentToString(<Application url={req.url}/>);
	});
	return React.renderComponentToString(
		<html>
			<head>
				<style id="server-side-style" dangerouslySetInnerHTML={{__html: css}} />
			</head>
			<body>
				<div id="content" dangerouslySetInnerHTML={{__html: html}} />
				<script src={"assets/" + hash + ".js"}></script>
			</body>
		</html>
	);
}