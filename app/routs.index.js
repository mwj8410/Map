const stateRouts = require('./services/state/state.routs');

module.exports = (() => {
  return {
    initialize: (app, server) => {
      stateRouts.initialize(app, server);
    }
  };
})();
