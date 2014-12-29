/** @jsx React.DOM */

var React = require('react');
var ItemActions = require('../actions/ItemActionCreators');
var ReactPropTypes = React.PropTypes;

function formatItem(item){
  if(item.done)
    return formatDoneItem(item);
  return formatUncompleteItem(item);
}

function formatDoneItem(item){
  return (
      <li onClick={this._onClickItem} style="text-decoration: line-through;">
      {item.text}
      </li>
  );
}

function formatUncompleteItem(item){
  return (
      <li onClick={this._onClickItem}>
      {item.text}
      </li>
  );
}

var Item = React.createClass({
  propTypes: {
    item: ReactPropTypes.object
  },
  
  render: function(){
    var item = this.props.item;
    return (
        <li>{item.text}</li>
    );
  },

  _onClickItem: function(event){
    ItemActions.toggleDone(this.props.item);
  }
});

module.exports = Item;
