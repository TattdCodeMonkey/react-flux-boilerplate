/** @jsx React.DOM */

var React = require('react');
var ReactPropTypes = React.PropTypes;

var Item = React.createClass({
  propTypes: {
    item: ReactPropTypes.object
  },
  
  render: function(){
    var item = this.props.item;
    return (
      <li>
      {item.text}
      </li>
    )
  }
});

module.exports = Item;
