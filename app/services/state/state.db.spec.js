const expect = require('expect');
const sqlite3 = require('sqlite3').verbose();

// Tested service
const stateDb = require('./state.db');
var db;

describe('state DB', () => {

  before(() => { db = new sqlite3.Database(':memory:'); });
  after(() => { db.close(); });

  it('exists', () => expect(typeof stateDb).toBe('function'));

  it('getStateIndexTableStructure()', () => expect(typeof stateDb.getStateIndexTableStructure)
    .toBe('function'));

  it('returns a string', () => {
    expect(typeof stateDb.getStateIndexTableStructure())
    .toBe('string');
  });
});
