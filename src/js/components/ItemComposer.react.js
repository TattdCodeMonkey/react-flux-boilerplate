/** @jsx React.DOM */

var React = require('react');
var ItemActions = require('../actions/ItemActionCreators');
var ENTER_KEY_CODE = 13;

var ItemComposer = React.createClass({
  getInitialState: function(){
    return {text: ''};
  },
  render: function(){
    return (
      <textarea
        className="item-composer"
        name="item"
        value={this.state.text}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
      />  
    );
  },

  _onChange: function(event, value) {
    this.setState({text: event.target.value});
  },
  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      var text = this.state.text.trim();
      if (text && text.length >=2 && text.length <= 50) {
        ItemActions.createItem(text);
      }
      this.setState({text: ''});
    }
  }

});

module.exports = ItemComposer;
