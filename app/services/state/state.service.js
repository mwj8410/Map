const fs = require('fs');
// const path = require('path');
// const _ = require('lodash');

const dataBasePath = 'app/data/';

module.exports = (() => {

  var stateIndexDB;

  // var stateIndexDB;

  // If the main database file does not exist, create it
  fs.stat(dataBasePath + 'stateIndex.json', err => {
    if(err && err.code == 'ENOENT') {
      fs.writeFile(
        dataBasePath + 'stateIndex.json',
        [
          '{',
          '"playerCharacterIndex":[],',
          '"stateIndex:[],"',
          '"worldIndex":[]',
          '}'
        ].join('')
      );
    }
  });

  // Needs to actually read the file rather create and forget
  stateIndexDB = {
    playerCharacterIndex: [],
    stateIndex: [],
    worldIndex: []
  };

  return {
    // CREATE methods
    createPlayerCharacter (params) {
      stateIndexDB.playerCharacterIndex.push({
        playerName: params.playerName
      });
    },

    createState (params) {
      stateIndexDB.stateIndex.push({
        stateName: params.stateName
      });
    },

    createWorld (params) {
      stateIndexDB.worldIndex.push({
        worldName: params.worldName
      });
    },

    // GET methods
    /**
     * getPlayerCharacterList
     * @returns {Array} collection of character objects
     */
    getPlayerCharacterList () {
      return stateIndexDB.playerCharacterIndex;
    },

    /**
     * getStateList
     * @returns {Array} collection of state objects
     */
    getStateList () {
      return stateIndexDB.stateIndex;
    },

    /**
     * getWorldList
     * @returns {Array} collection of world objects
     */
    getWorldList () {
      return stateIndexDB.worldIndex;
    }

  };
})();
