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

  describe('createState()', () => {
    const params = {
      stateName: 'test state'
    };
    it('exists', () => expect(typeof stateService.createState).toBe('function'));
    it('runs without error', () => {
      expect(() => {
        stateService.createState(params);
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
      expect(stateService.getPlayerCharacterList()[0].playerName).toBe('test player');
    });
  });

  describe('getStateList()', () => {
    it('exists', () => expect(typeof stateService.getStateList).toBe('function'));
    it('runs without error', () => {
      expect(() => {
        stateService.getStateList();
      }).toNotThrow(Error);
    });
    it('provides a list of current states', () => {
      expect(stateService.getStateList()[0].stateName).toBe('test state');
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
      expect(stateService.getWorldList()[0].worldName).toBe('test world');
    });
  });

});
