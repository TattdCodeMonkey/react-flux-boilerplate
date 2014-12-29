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
    itemAdded: function(item){
        ItemDispatcher.handleServerAction({
            type: ActionTypes.UPDATE_ITEM,
            data: item
        });
    }
};