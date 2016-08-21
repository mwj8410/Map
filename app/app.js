// External requirements
const express = require('express');
// const session = require('express-session'); // We will need this at some point

// service requirements
// const mapService = require('./services/map');

// required parameters
const ip = '0.0.0.0';
const port = '4242';

var app = express();

// We assume that this will be a served API

// const stateService = require('./services/state/state.service');
// stateService.getStateList();

const routs = require('./routs');

// Start the server
var server = app.listen(port, ip, () => {
  // console.log('Demo server listening at', port, ip);
});

routs.initialize(app, server);

module.exports = app;
