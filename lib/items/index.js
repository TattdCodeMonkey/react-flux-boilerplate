var Joi = require('joi');

var _items = [];
var _lastId = 0;

var itemJoiSchema = Joi.object().keys({
    id: Joi.number().min(1),
    text: Joi.string().min(2).max(50)
  });
var itemsJoiSchema = Joi.array().includes(itemJoiSchema);

var getItems = {
  description: 'returns all the current items',
  handler: function(request, reply){
    return reply(_items);
  },
  response: {
    schema: itemsJoiSchema,
    failAction: "error"
  }
};

var addItem = {
  description: 'adds a string item to the current list',
  handler: function(request, reply) {
    var newItem = {id: ++_lastId, text: request.params.item};
    
    _items.push(newItem);
    return reply(_items);  
  },
  validate: {
    params: {
      item: Joi.string().min(2).max(50)
    }
  },
  response: {
    schema: itemsJoiSchema,
    failAction: "error"
  }
};

exports.register = function (server, options, next) {
  server.route([{
    path: '/api/items',
    method: 'GET',
    config: getItems
  },
  {
    path: '/api/items/new/{item}',
    method: ['PUT','POST'],
    config: addItem   
  }]);
  
  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};
