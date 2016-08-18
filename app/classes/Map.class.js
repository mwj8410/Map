'use strict';
// const _ = require('lodash');

/**
 * Map class
 *
 * Expresses a 2D tile based map.
 * We think of the data as a plane of vertices and faces
 *
 *   v---v---v
 *   | f | f |
 *   v---v---v
 *   | f | f |
 *   v---v---v
 *
 * We express this as 2 overlapping 2D arrays of values where the size of the
 * the vertices is +1 on each dimension.
 */
class Map {
  /**
   * @constructor
   * @param {array} vertData 2D array of numbers representing height
   * @param {array} faceData 2D array of numbers representing tile data
   */
  constructor (vertData, faceData) {
    // x is expressed by which and y are assumed by sequence. Only z values will be expressed here.
    //
    this.vertices = vertData;
    this.faces = faceData;

    // faceData.forEach(faceRow => {
    //   var row = [];
    //   faceRow.forEach(face => {
    //
    //   });
    // });
  }
}

module.exports = Map;
