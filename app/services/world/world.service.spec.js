const expect = require('expect');

// Tested service
const worldService = require('./world.service');

const params = {
  idKey: 'testWorld',
  options: [],
  templateName: 'testWorldTemplate'
};

describe('world service', () => {
  it('exists', () => expect(typeof worldService).toBe('object'));

  describe('createWorld()', () => {
    it('exists', () => expect(typeof worldService.createWorld).toBe('function'));
    it('runs without error', () => {
      expect(() => {
        worldService.createWorld(params);
      }).toNotThrow(Error);
    });
  });

  describe('openWorld()', () => {
    it('exists', () => expect(typeof worldService.openWorld).toBe('function'));
    it('returns `false` when the world does not exist', () => {
      expect(worldService.openWorld('not_real')).toBe(false);
    });
    it('returns `true` when the world exists', () => {
      expect(worldService.openWorld(params.idKey)).toBe(true);
    });
    it('returns `false` when a world is already open', () => {
      expect(worldService.openWorld(params.idKey)).toBe(false);
    });
  });

  describe('closeWorld()', () => {
    it('exists', () => expect(typeof worldService.closeWorld).toBe('function'));
    it('closes the world data and returns `true` when a world is open', () => {
      expect(worldService.closeWorld()).toBe(true);
    });
    it('returns `false` when a world is not open', () => {
      expect(worldService.closeWorld()).toBe(false);
    });
  });

  describe('saveWorld()', () => {
    it('exists', () => expect(typeof worldService.saveWorld).toBe('function'));

    it('returns `false` when a world is not open', () => {
      expect(worldService.saveWorld()).toBe(false);
    });

    it('returns `true` when a world is open', () => {
      expect(worldService.openWorld(params.idKey)).toBe(true);
      expect(worldService.saveWorld()).toBe(true);
    });
  });

});
