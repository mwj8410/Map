'use strict';
// const _ = require('lodash');

/**
 * Tile class
 *
 * Expresses a tile of terrain or other floor area. It contains other details about the
 * tile that cannot be seen.
 *
 * Actions will be applied on the Tile object and will then be routed to characteristics for individual
 * handling.
 *
 */
class Tile {
  /**
   * @constructor
   * @param {object} data
   * @param {array} data.characteristics collection of characteristic
   * @param {string} data.tileType the unique identifier of the tile type
   */
  constructor (data) {
    data = data || {};

    this.characteristics = data.characteristics || [];
    this.tileType = data.tileType || null;
  }

  /**
   * Applies the action to the tile. This allows each characteristic to react to the action.
   * @return {array} Entities that exist at x and y
   */
  applyAction (action) {
    this.characteristics.forEach(characteristic => {
      if (characteristic.applyAction) {
        characteristic.applyAction(action);
      }
    });
  }
}

module.exports = Tile;
