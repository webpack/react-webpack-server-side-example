/** @jsx React.DOM */

var React = require("react");

var HelloWorld = React.createClass({
	render: function() {
		require("./Application.css");
		return (
			<div className="application">
				<h1>Hello World</h1>
				<pre>{this.props.url}</pre>
				<img src={require("./image.png")} height="100" />
				<img src={require("./image.jpg")} height="100" />
			</div>
		);
	}
});

module.exports = HelloWorld;