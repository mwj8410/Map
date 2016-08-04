'use strict';
const _ = require('lodash');

/**
 * Map class
 *
 * Expresses a 2D tile based map.
 *
 * We will express the world as a plane of infinite tiles. For this, the base tile will be `null`. Each tile
 * will be assumed to be void unless explicitly set to some value. A null vale will not need to be expressed.
 *
 */
class Map {
  /**
   * @constructor
   */
  constructor () {
    this.entityIndex = [];
    this.tileIndex = [];
  }

  /**
   * Fetches a set of entities at a set location
   * @return {array} Entities that exist at x and y
   */
  getEntitiesAtLocation (x, y) {
    return _(this.entityIndex)
      .find({ 'x': x, 'y': y });
  }

  /**
   * Fetches a set of tiles within plus or minus distance from x, y.
   * @return null or an array of Entities
   */
  getEntitiesInBlock (x, y, distance) {
    return _(this.entityIndex)
      .filter(tile =>
        ( tile.x > x + distance || tile.x > x - distance ) &&
        ( tile.y > y + distance || tile.y > y - distance )
      )
      .value()[0];
  }

  /**
   * Fetches a single tile base on location.
   * @return null or a Tile object.
   */
  getTile (x, y) {
    return _(this.tileIndex)
      .find({ 'x': x, 'y': y });
  }

   /**
   * Fetches a set of tiles within plus or minus distance from x, y.
   * @return null or a
   */
  getTilesInBlock (x, y, distance) {
    return _(this.tileIndex)
      .filter(tile =>
        ( tile.x > x + distance || tile.x > x - distance ) &&
        ( tile.y > y + distance || tile.y > y - distance )
      )
      .value()[0];
  }

  /**
   * Mounts a set of Entities to the current complete set of all Entities currently tracked.
   */
  loadEntities (entitiySet) {
    this.entityIndex = this.entityIndex.concat(entitiySet);
  }

  /**
   * Mounts a set of Tiles to the current complete set of all Tiles currently tracked.
   */
  loadTiles (tileSet) {
    this.tileIndex = this.tileIndex.concat(tileSet);
  }
}

module.exports = Map;
