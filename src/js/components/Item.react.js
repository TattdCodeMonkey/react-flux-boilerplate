/** @jsx React.DOM */

var React = require('react');
var ItemActions = require('../actions/ItemActionCreators');
var ReactPropTypes = React.PropTypes;

function itemStyle(item){
  if(item.done)
    return "text-decoration: line-through;";
  return "";
}

var Item = React.createClass({
  propTypes: {
    item: ReactPropTypes.object
  },
  
  render: function(){
    var item = this.props.item;
    if(item.done)
      return (
          <li onClick={this._onClickItem}>-{item.text}- <span>X</span></li>
      );
    return (
        <li onClick={this._onClickItem}>{item.text}</li>
    );
  },

  _onClickItem: function(event){
    ItemActions.toggleDone(this.props.item);
  }
});

module.exports = Item;
