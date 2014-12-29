var ItemDispatcher = require('../dispatcher/ItemDispatcher');
var ItemConstants = require('../constants/ItemConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = ItemConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _items = [];

function loadItemData(data) {
  _items = data;
}

var ItemStore = assign({}, EventEmitter.prototype, {

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

ItemStore.dispatchToken = ItemDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.RECEIVE_DATA:
      loadItemData(action.data);
      ItemStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = ItemStore;
