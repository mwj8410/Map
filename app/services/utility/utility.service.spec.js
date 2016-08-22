const expect = require('expect');
// const sqlite3 = require('sqlite3').verbose();

// Tested service
const utilityService = require('./utility.service');
// const db = new sqlite3.Database(':memory:');

// Mirror the required services

describe('utility service', () => {
  it('exists', () => expect(typeof utilityService).toBe('object'));

  describe('generateUniqueString()', () => {
    it('exists', () => expect(typeof utilityService.generateUniqueString)
      .toBe('function'));

    it('generates a reasonably unique string', () => {
      var expression = /[a-f0-9]{12}/;
      expect(expression.test(utilityService.generateUniqueString())).toBe(true);
    });
  });

  describe('generateUUID()', () => {
    it('exists', () => expect(typeof utilityService.generateUUID).toBe('function'));

    it('generates a valid version 4 UUID', () => {
      var expression = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-(8|9||a|b)[a-f0-9]{3}-[a-f0-9]{12}/;
      expect(expression.test(utilityService.generateUUID())).toBe(true);
    });
  });

});
