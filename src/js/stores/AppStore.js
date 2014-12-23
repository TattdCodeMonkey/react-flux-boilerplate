var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _items = [];

function loadItemData(data) {
  _items = data;
}

function addItem(item) {
  _items.push(item);
}

var AppStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAll: function() {
    return _items;
  }

});

AppStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.RECEIVE_DATA:
      loadItemData(action.data);
      AppStore.emitChange();
      break;

    case ActionTypes.CLICK_BUTTON:
      console.log('store action: ', action);
      addItem(action.buttonID);
      AppStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = AppStore;
