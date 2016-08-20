// const fs = require('fs');
// const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const stateDb = require('./state.db');

const dataBasePath = 'app/data/';

module.exports = (() => {

  var openDatabase = dbName => new sqlite3.Database(dataBasePath + dbName);
  var stateIndex = openDatabase('stateIndex.pkg');

  // Initialize BD
  stateIndex.get(
    'select count(*) from sqlite_master where type = "table";',
    (err, res) => {
      if (err) {
        // console.log(err);
      }
      if (res['count(*)'] === 0) {
        // We need to build the DB
        // console.log('creating state database');
        stateIndex.run(stateDb.getPlayerCharacterIndexTableStructure());
        stateIndex.run(stateDb.getWorldIndexTableStructure());
      }
    }
  );

  return {

    createPlayerCharacter (params) {
      stateIndex.run(stateDb.createPlayerQuery(params));
    },

    getPlayerCharacters () {
      var results = [];
      stateIndex.each(stateDb.getPlayerCharactersQuery(), (err, row) => {
        results.push(row);
      });
      return results;
    },

    /**
     * getStateList
     * @callback callback
     */
    getStateList () {

      // worldIndex.serialize(() => {
        // stateIndex.run('CREATE TABLE lorem (info TEXT)');

        // stmt = worldIndex.prepare('INSERT INTO lorem VALUES (?)');
        // for (i = 0; i < 10; i++) {
        //   stmt.run('Ipsum ' + i);
        // }
        // stmt.finalize();

        // stateIndex.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
        //   console.log(row.id + ': ' + row.info);
        // });
      // });
      return;
    },

    /**
     * openState
     * @param {string} stateName
     */
    openState (stateName) {
      return stateName;
    },

    /**
     * saveState
     * @param {string} stateName
     */
    saveState (stateName) {
      return stateName;
    }
  };
})();
