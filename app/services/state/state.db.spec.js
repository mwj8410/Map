const expect = require('expect');
const sqlite3 = require('sqlite3').verbose();

// Tested service
const stateDb = require('./state.db');
var db;

describe('state DB', () => {

  before(() => { db = new sqlite3.Database(':memory:'); });
  after(() => { db.close(); });

  it('exists', () => expect(typeof stateDb).toBe('function'));

  it('createPlayerQuery()', () => {
    var params = {};
    expect(typeof stateDb.createPlayerQuery).toBe('function');
    expect(typeof stateDb.createPlayerQuery(params)).toBe('string');
  });

  it('getPlayerCharactersQuery()', () => {
    expect(typeof stateDb.getPlayerCharactersQuery).toBe('function');
    expect(typeof stateDb.getPlayerCharactersQuery()).toBe('string');
  });

  it('getPlayerCharacterIndexTableStructure()', () => {
    expect(typeof stateDb.getPlayerCharacterIndexTableStructure).toBe('function');
    expect(typeof stateDb.getPlayerCharacterIndexTableStructure()).toBe('string');
  });

  it('getStateIndexTableStructure()', () => {
    expect(typeof stateDb.getStateIndexTableStructure).toBe('function');
    expect(typeof stateDb.getStateIndexTableStructure()).toBe('string');
  });

  it('getWorldIndexTableStructure()', () => {
    expect(typeof stateDb.getWorldIndexTableStructure).toBe('function');
    expect(typeof stateDb.getWorldIndexTableStructure()).toBe('string');
  });

});
