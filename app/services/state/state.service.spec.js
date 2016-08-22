const expect = require('expect');

// Tested service
const stateService = require('./state.service');

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

  describe('createWorld()', () => {
    const params = {
      worldName: 'test world'
    };
    it('exists', () => expect(typeof stateService.createWorld).toBe('function'));
    it('runs without error', () => {
      expect(() => {
        stateService.createWorld(params);
      }).toNotThrow(Error);
    });
  });

  describe('getPlayerCharacterList()', () => {
    it('exists', () => expect(typeof stateService.getPlayerCharacterList).toBe('function'));
    it('runs without error', () => {
      expect(() => {
        stateService.getPlayerCharacterList();
      }).toNotThrow(Error);
    });
    it('provides a list of current players', () => {
      var playerData = stateService.getPlayerCharacterList()[0];
      expect(typeof playerData.id).toBe('string');
      expect(typeof playerData.fileName).toBe('string');
      expect(playerData.name).toBe('test player');
    });
  });

  describe('getWorldList()', () => {
    it('exists', () => expect(typeof stateService.getWorldList).toBe('function'));
    it('runs without error', () => {
      expect(() => {
        stateService.getWorldList();
      }).toNotThrow(Error);
    });
    it('provides a list of current worlds', () => {
      var worldData = stateService.getWorldList()[0];
      expect(typeof worldData.id).toBe('string');
      expect(typeof worldData.fileName).toBe('string');
      expect(worldData.name).toBe('test world');
    });
  });

});
