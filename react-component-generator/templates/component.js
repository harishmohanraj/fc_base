/**
 * This is just <%= whatIsThis %>.
 *
 */

var React = require("react");
var <%= filename %>Action = require("../actions/<%= filename %>.Action");
var <%= filename %>Store = require("../stores/<%= filename %>.Stores");
var <%= filename %>Style = require("../../styles/<%= filename %>.scss");

var <%= filename.substring(0, 1).toUpperCase() + filename.substring(1, filename.length) %> = React.createClass({
  getInitialState : function(){
    return {

    }
  },
  render: function(){
    return <div><%= filename %> Component render Code</div>
  }
});

React.render(<<%= filename.substring(0, 1).toUpperCase() + filename.substring(1, filename.length) %> />, document.getElementById('<%= filename.substring(0, filename.length) %>'));
