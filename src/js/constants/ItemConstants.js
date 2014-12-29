var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    UPDATE_ITEM: null,
    REMOVE_ITEM: null,
    RECEIVE_DATA: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
