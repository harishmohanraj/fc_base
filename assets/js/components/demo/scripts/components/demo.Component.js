/**
 * This is just an example file created at Sun Jan 10 2016 21:30:15 GMT+0530 (India Standard Time).
 *
 */

var React = require("react");
var demoAction = require("../actions/demo.Action");
var demoStore = require("../stores/demo.Stores");
var demoStyle = require("../../styles/demo.scss");

var Demo = React.createClass({
  getInitialState : function(){
    return {

    }
  },
  render: function(){
    return <div>WTF !!</div>
  }
});

React.render(<Demo />, document.getElementById('demo'));

