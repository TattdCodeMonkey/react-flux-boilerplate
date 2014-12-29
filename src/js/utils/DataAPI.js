module.exports = {

  getData: function(callback){
    $.get('/api/items')
      .done(function(data){
        callback({success: true, data: data});
      })
      .fail(function() {
        callback({error: true, success: false});
      });
  },
  addItem: function(item, callback){    
    $.post('/api/items/new/'+item)
      .done(function(data){
       callback({success: true, data: data});
      })
      .fail(function() {
        callback({error: true, success: false});
      });
  }
};
