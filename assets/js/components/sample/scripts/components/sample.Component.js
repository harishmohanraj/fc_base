/**
 * This is just an example file created at Sat Jan 09 2016 23:11:40 GMT+0530 (IST).
 *
 */

var React = require("react");
var sampleAction = require("../actions/sample.Action");
var sampleStore = require("../stores/sample.Stores");
var style = require('../../styles/sample.scss');

var Sample = React.createClass({
  getInitialState: function () {
    return {}
  },
  render: function () {
    return <h1 className="sample">foo-bar
      <p className="has-a-foo-man">nested element</p></h1>
  }
});

React.render(<Sample />, document.getElementById('sample'));
