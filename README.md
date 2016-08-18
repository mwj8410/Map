# Map [![Build Status](https://travis-ci.org/mwj8410/Map.svg?branch=master)](https://travis-ci.org/mwj8410/Map)

This refactor is to express the map as a 3 dimensional representation of a 2
dimensional plane. To do this, we assume that each cell of a standard cartesian
plane is a tile and the corners of the cell retain values for the z axis.

Value count for corners will be: ( n + 1 ) * 2
Value count for tiles will be: n * 2

## Tile

A tile will be a material, and have a surface (think grass).
