// This file bootstraps the entire application

var ItemActions = require('./actions/ItemActionCreators.js');
var App = require('./components/App.react');
var React = require('react');
window.React = React; // export for http://fb.me/react-devtools

// Load Mock API Call
ItemActions.getData();

React.render(<App />, document.getElementById('app'));
