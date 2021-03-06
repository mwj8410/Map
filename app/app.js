// External requirements
const express = require('express');
const bodyParser = require('body-parser');
// const session = require('express-session'); // We will need this at some point

// required parameters
const ip = '0.0.0.0';
const port = '4242';

var app = express();
var server;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// We assume that this will be a served API

const routs = require('./routs.index');

// Start the server
server = app.listen(port, ip, () => {
  // console.log('Demo server listening at', port, ip);
});

routs.initialize(app, server);

module.exports = app;
