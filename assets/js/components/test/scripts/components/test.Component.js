/**
 * This is just an example file created at Wed Jan 27 2016 18:39:00 GMT+0530 (India Standard Time).
 *
 */

var React = require("react");
var testAction = require("../actions/test.Action");
var testStore = require("../stores/test.Stores");
var testStyle = require("../../styles/test.scss");

var Test = React.createClass({
  getInitialState : function(){
    return {

    }
  },
  render: function(){
    return <div></div>
  }
});

React.render(<Test />, document.getElementById('test'));
