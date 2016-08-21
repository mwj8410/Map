const stateService = require('./services/state/state.service');

module.exports = (() => {

  const getStateList = (req, res) => {
    res.send();
  };

  const shutdownApplication = (req, res, server) => {
    // should check session
    res.sendStatus(200);
    server.close();
    // process.exit();
  };

  return {
    initialize: (app, server) => {

      // shutdown
      app.post(
        '/shutdown/',
        (req, res) => shutdownApplication(req, res, server)
      );

      app.get('/', getStateList);

    }
  };
})();
