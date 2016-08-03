const expect = require('expect');
const Map = require('./Map.class');

describe('Map', () => {

  it('can be instantiated', () => {
    var map = new Map();
    expect(typeof map).toBe('object');
    expect(typeof map.loadTiles).toBe('function');
  });

  it('allows tiles to be mounted and retrieved', () => {
    var map = new Map();
    var tileFixture = [
      {
        tileType: 1,
        x: 0,
        y: 0
      }, {
        tileType: 2,
        x: 1,
        y: 0
      }
    ];
    map.loadTiles(tileFixture);
    expect(map.getTile(tileFixture[0].x, tileFixture[0].y).tileType).toBe(tileFixture[0].tileType);
  });

  it('allows fetching tiles based on rectangular area', () => {
    var map = new Map();
    var tileFixture = [
      {
        tileType: 1,
        x: 2,
        y: 2
      }, {
        tileType: 2,
        x: 10,
        y: 0
      }
    ];
    map.loadTiles(tileFixture);
    expect(map.getTilesInBlock(0, 0, 5).tileType).toBe(tileFixture[0].tileType);
  });

});
