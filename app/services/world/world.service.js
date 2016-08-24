const fs = require('fs');
// const path = require('path');
// const _ = require('lodash');

// const util = require('../utility/utility.service');

const dataBasePath = 'data/';

module.exports = (() => {

  var worldDB = null;

  const createWorldDataFile = (fileId, templateName) => {
    try {
      fs.mkdirSync(dataBasePath + fileId);
    } finally {
      try {
        fs.createReadStream('staticData/' + templateName + '/world.world.json')
          .pipe(fs.createWriteStream(dataBasePath + fileId + '/world.json'));
      } finally {
        return;
      }
    }
  };

  const openWorldDataFile = fileId => {
    var filePath = dataBasePath + fileId + '/world.json';
    var exists;
    try {
      exists = fs.lstatSync(filePath).isFile();
    } catch (err) {
      return false;
    } finally {
      if (exists) {
        worldDB = fs.readFileSync(filePath, 'utf8');
        return true;
      }
    }
  };

  return {

    /**
     * closeWorld(()
     *
     * @return {boolean} true when the world is successfully closed or false if
     * an error is encountered or there is no world currently open
     */
    closeWorld () {
      if (worldDB === null) {
        return false;
      }
      worldDB = null;
      return true;
    },

    /**
     * createWorld(()
     *
     * Creates a new instance of specified world data for a new game.
     * @return {boolean} true if creates successfully, otherwise returns false
     */
    createWorld (params) {
      createWorldDataFile(params.idKey, params.templateName);
      return;
    },

    /**
     * openWorld()
     * @param {string} id the id key for the world to open.
     * @return {boolean} true when the world is successfully loaded or false if
     * an error is encountered.
     */
    openWorld (id) {
      if (worldDB !== null) {
        return false;
      }
      return openWorldDataFile(id);
    },

    /**
     * saveWorld()
     * @return {boolean} true when the world is successfully saved or false if
     * an error is encountered or there is no world currently open
     */
    saveWorld () {
      if (worldDB === null) {
        return false;
      }
      return true;
    }

  };
})();
