const expect = require('expect');
// const sqlite3 = require('sqlite3').verbose();

// Tested service
const stateService = require('./state.service');
// const db = new sqlite3.Database(':memory:');

// Mirror the required services
// const db = require('./state.db');

describe('state service', () => {
  it('exists', () => expect(typeof stateService).toBe('object'));

  describe('createPlayerCharacter()', () => {
    const params = {
      playerName: 'test player'
    };

    it('exists', () => expect(typeof stateService.createPlayerCharacter).toBe('function'));

    it('runs without error', () => {
      expect(() => {
        stateService.createPlayerCharacter(params);
      }).toNotThrow(Error);
    });

  });

  describe('getPlayerCharacters()', () => {

    it('exists', () => expect(typeof stateService.getPlayerCharacters).toBe('function'));

    it('runs without error', () => {
      expect(() => {
        stateService.getPlayerCharacters();
      }).toNotThrow(Error);
    });

  });

  describe('getStateList()', () => {
    it('exists', () => expect(typeof stateService.getStateList).toBe('function'));
  });

  describe('openState()', () => {
    it('exists', () => expect(typeof stateService.openState).toBe('function'));
  });

  describe('saveState()', () => {
    it('exists', () => expect(typeof stateService.saveState).toBe('function'));
  });

});
