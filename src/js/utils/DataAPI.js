var ItemServerActions = require('../actions/ItemServerActionCreators');

module.exports = {

  getData: function(){
    $.get('/api/items')
      .done(function(data){
          ItemServerActions.receiveData(data);
      })
      .fail(function() {
        console.error('error retreiving data from the server');
      });
  },
  addItem: function(item){
    $.post('/api/items/new/'+item)
      .done(function(data){
        ItemServerActions.itemAdded(data);
      })
      .fail(function() {
        console.error('server error adding item');
      });
  }
};
