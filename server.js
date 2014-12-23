var Hapi = require('hapi');
var Good = require('good');

var server = new Hapi.Server();

server.connection({port: 3000});

// Statically serve 'dist' directory
server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'dist'
        }
    }
});

server.register({register: require('./lib/items')}, function(err){
  if(err)
    console.error('Failed to load items plugin: ', err);
});

server.register({
  register: Good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      args: [{log: '*', response: '*'}]
    }]
  }
}, function(err){
  if(err) {
    throw err; 
  }

  server.start(function () {
    console.log('Server running at:', server.info.uri);
  });
});

