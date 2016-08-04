'use strict';
const expect = require('expect');
const Tile = require('./Tile.class');

describe('Tile', () => {
  var defaultFixture = {
    characteristics: []
  };

  it('can be instantiated without providing data', () => {
    var tile = new Tile();
    expect(typeof tile).toBe('object');
  });

  it('can be instantiated with data', () => {
    var tile = new Tile(defaultFixture);
    expect(typeof tile).toBe('object');
  });

  it('applies an action to characteristics', () => {
    var localFixture = {
      characteristics: [
        {
          applyAction: () => {
            return true;
          }
        }, {

        }
      ]
    };
    var tile = new Tile(localFixture);
    var spy;

    // For code coverage
    localFixture.characteristics[0].applyAction();

    spy = expect.spyOn(localFixture.characteristics[0], 'applyAction');
    tile.applyAction('test');
    expect(spy).toHaveBeenCalled();
  });

});
