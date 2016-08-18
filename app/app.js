// External requirements
const express = require('express');
// const sqlite3 = require('sqlite3').verbose();
// service requirements
// const mapService = require('./services/map');

// required parameters
const ip = '0.0.0.0';
const port = '4242';

var app = express();

const stateService = require('./services/state/state.service');

// We assume that this will be a served API

// on signal to load a game ... initialize the map by reading the compressed
// file.

// app.get('/', (req, res) => {
//
// });

stateService.getStateList();

// Start the server
app.listen(port, ip, () => {
  // console.log('Demo server listening at', port, ip);
});
