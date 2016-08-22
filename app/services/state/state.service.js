const fs = require('fs');
// const path = require('path');
// const _ = require('lodash');

const util = require('../utility/utility.service');

const dataBasePath = 'data/';

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
        id: params.id || util.generateUUID(),
        fileName: params.fileName || util.generateUniqueString(),
        name: params.playerName
      });
    },

    /**
     * createWorld
     */
    createWorld (params) {
      stateIndexDB.worldIndex.push({
        id: params.id || util.generateUUID(),
        fileName: params.fileName || util.generateUniqueString(),
        name: params.worldName
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
     * getWorldList
     * @returns {Array} collection of world objects
     */
    getWorldList () {
      return stateIndexDB.worldIndex;
    }

  };
})();
