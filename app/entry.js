/** @jsx React.DOM */

var React = require("react");
var Application = require("./Application");

React.renderComponent(
	<Application url={location.pathname + (location.search || "")} />,
	document.getElementById("content")
);

var serverSideStyle = document.getElementById("server-side-style");
if(serverSideStyle)
	document.getElementsByTagName("head")[0].removeChild(serverSideStyle);