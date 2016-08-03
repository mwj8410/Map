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
  constructor () {
    this.entityIndex = [];
    this.tileIndex = [];
  }

  /**
   * Fetches a single tile base on location.
   * @return null or a
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
   * Mounts a set of tiles to the furrent complete set of all tiles currently tracked.
   */
  loadTiles (tileSet) {
    this.tileIndex = this.tileIndex.concat(tileSet);
  }
}

module.exports = Map;
