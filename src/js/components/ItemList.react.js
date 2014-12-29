/** @jsx React.DOM */

var React = require('react');

var ItemStore = require('../stores/ItemStore');
var Item = require('./Item.react');

function getStateFromStores(){
  return {
    items: ItemStore.getAll()
  };
}

function getListItem(item){
  return(
    <Item key={item.id} item={item} />
  );
}

var ItemList = React.createClass({
  getInitialState: function(){
   return getStateFromStores();  
  },
  componentDidMount: function() {
    ItemStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    ItemStore.removeChangeListener(this._onChange);
  },
  render: function(){
    var itemList = this.state.items.map(getListItem);
    return (
      <ul>
        {itemList}
      </ul>
    )
  },

  /**
   * * Event handler for 'change' events coming from the MessageStore
   * */
  _onChange: function() {
    this.setState(getStateFromStores());
  } 
});

module.exports = ItemList;
