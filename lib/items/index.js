var Joi = require('joi');

var _items = [];
var _lastId = 0;

var itemJoiSchema = Joi.object().keys({
    id: Joi.number().min(1),
    text: Joi.string().min(2).max(50),
    done: Joi.boolean()
  });
var itemsJoiSchema = Joi.array().sparse().includes(itemJoiSchema);

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
    var newItem = {
      id: ++_lastId,
      text: request.params.item,
      done: false
    };
    
    _items[newItem.id] = newItem;
    return reply(newItem);
  },
  validate: {
    params: {
      item: Joi.string().min(2).max(50)
    }
  },
  response: {
    schema: itemJoiSchema,
    failAction: "error"
  }
};

var toggleDone = {
  description: 'toggle the done value of the given item',
  handler: function(request, reply){
    var item = _items[request.params.id];
    if(item === null)
      return reply('item with id not found').code(404);

    item.done = !item.done;
    return reply(item);
  },
  validate:{
    params: {
      id: Joi.number().min(1)
    }
  }
};

var removeItem = {};

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
