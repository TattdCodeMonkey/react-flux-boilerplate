var DataAPI = require('../utils/DataAPI.js');
var ItemDispatcher = require('../dispatcher/ItemDispatcher');
var ItemConstants = require('../constants/ItemConstants');

var ActionTypes = ItemConstants.ActionTypes;

module.exports = {

  receiveData: function(data){
    ItemDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_DATA,
      data: data
    });
  }, 
  getData: function(){
    DataAPI.getData();
  },
  createItem: function(itemText) {
    var self = this;
    DataAPI.addItem(itemText);
  },
  toggleDone: function(item){
    var self = this;
    item.done = !item.done;
    ItemDispatcher.handleServerAction({
      type: ActionTypes.UPDATE_ITEM,
      data: item
    });
  }

};
