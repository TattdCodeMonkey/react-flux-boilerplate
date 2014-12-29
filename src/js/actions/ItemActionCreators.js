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
    var self = this;
    DataAPI.getData(function(response){
      if(response.success){
        self.receiveData(response.data);
      }
      else{ 
        console.error('error getting data from the server');
      }
    });
  },
  createItem: function(itemText) {
    var self = this;
    DataAPI.addItem(itemText, function(response){
      if(response.success)
        self.receiveData(response.data);
      else
        console.error('error adding item to list on server');
    });
  }

};
