# Map [![Build Status](https://travis-ci.org/mwj8410/Map.svg?branch=master)](https://travis-ci.org/mwj8410/Map)

This refactor is to express the map as a 3 dimensional representation of a 2
dimensional plane. To do this, we assume that each cell of a standard cartesian
plane is a tile and the corners of the cell retain values for the z axis.

Value count for corners will be: ( n + 1 ) * 2
Value count for tiles will be: n * 2

## Tile

A tile will be a material, and have a surface (think grass).

### Rock

Each axis of height will include a second height value that represents the
bedrock height at that x,y. This also represents the lower limit of the actual
expressed height.

### Water
Water level will be expressed as a height value on the tile. If the tile height
is below the water height at that point, then the tile will be water.
Additionally, there will be a fluid depth and fluid type on the tile. If this is
in place, then the tile will be that fluid.

If a tile's height is below the height of a tile that is expressed as fluid,
then that tile will also be expressed as a flowing version of that fluid.

The exact relationships needed for fluids will be worked out at a later time.

## Underworld

At any point where the game data requires that the world surface be penetrated,
an opening into the underworld will be expressed. This will functions as a
teleport.

All underworld map data will assume that the world is a solid mass and cubes have
been carved out. These will be arranged as 2D planes and will be logically
stacked.

Any logical inconsistencies, like the underworld map logically protruding into
overworld space or two underworld instances logically occupying the same space,
will be ignored.

## Entities

A world entity is any object or actor that exists in the world and is not
specifically a part of map data. This extends to plants (maybe not in all cases),
building, actors, and object.

### Buildings

All building will be prefabricated meshes placed in the world. As such, they do
not adhere to the grid structure perfectly. Any part of the building that
penetrates the surface of the map will be treated as a break into the underworld.
