/** @jsx React.DOM */

var React = require('react');
var ItemList = require('./ItemList.react');
var ItemComposer = require('./ItemComposer.react');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Rodneys contrived React List app</h2>
        <br />
        <ItemComposer />
        <br />
        <ItemList /> 
      </div>
    );
  }

});

module.exports = App;
