var AppActions = require('../actions/AppActionCreators');

var API_URL = '/items';
var TIMEOUT = 10000;

module.exports = {

  getData: function(){
//    var data = JSON.parse(localStorage.getItem('items'));
//    AppActions.receiveData(data);
      $.get('/items', function(data, status){
        console.log("Status: ", status);
        console.log("Data: ", data);
        if(status == 'success')
          AppActions.receiveData(data);     
//      else
//        console.error(data);
      });
  }, 
};
