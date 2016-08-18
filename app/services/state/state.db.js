/**
States are world saves.

*/

class StateDb {

  static getPlayerCharacterIndexTableStructure () {
    return [
      'CREATE TABLE player_character_index (',
      'id INT(11) PRIMARY KEY,',
      'world_name VARCHAR(255) NOT NULL',
      ');'
    ].join(' ');
  }

  static getStateIndexTableStructure () {
    return [
      'CREATE TABLE index IF NOT EXISTS (',
      'id TEXT',
      'id INT(11) PRIMARY KEY,',
      'world_id INT(11) UNSIGNED,',
      'state_name VARCHAR(255) NOT NULL',
      'FOREIGN KEY (world_id) REFERENCES state.world_index(id),',
      ')'
    ].join(' ');
  }

  static getWorldIndexTableStructure () {
    return [
      'CREATE TABLE world_index (',
      'id INT(11) PRIMARY KEY,',
      'world_name VARCHAR(255) NOT NULL',
      ');'
    ].join(' ');
  }
}

module.exports = StateDb;
