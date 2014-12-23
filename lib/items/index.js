var Joi = require('joi');

var _items = ['test1','test2', 'test3'];

var getItems = {
  description: 'returns all the current items',
  handler: function(request, reply){
    return reply(_items);
  },
  response: {
    schema: Joi.array().includes(Joi.string()),
    failAction: "error"
  }
};

exports.register = function (server, options, next) {
  server.route({
    path: '/items',
    method: 'GET',
    config: getItems
  });
  
  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};
