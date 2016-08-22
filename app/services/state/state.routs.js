const stateService = require('./state.service');

module.exports = (() => {

  // API access and routing logic

  const createPlayer = (req, res) => {
    res.send(stateService.createPlayerCharacter(req.body));
  };

  const createState = (req, res) => {
    res.send(stateService.createState(req.body));
  };

  const createWorld = (req, res) => {
    res.send(stateService.createWorld(req.body));
  };

  const getPlayerCharacterList = (req, res) => {
    res.send(stateService.getPlayerCharacterList());
  };

  const getStateList = (req, res) => {
    res.send(stateService.getStateList());
  };

  const getWorldList = (req, res) => {
    res.send(stateService.getWorldList());
  };

  // shutdown method
  const shutdownApplication = (req, res, server) => {
    res.sendStatus(200);
    server.close();
  };

  return {
    initialize: (app, server) => {

      // State Services
      app.get('/state/list', getStateList);
      app.post('/state/list', createState);

      app.post('/state/player', createPlayer);
      app.get('/state/player/list', getPlayerCharacterList);

      app.post('/state/world', createWorld);
      app.get('/state/world/list', getWorldList);

      // shutdown
      app.post(
        '/shutdown/',
        (req, res) => shutdownApplication(req, res, server)
      );

    }
  };
})();
