import { Map, Range } from 'immutable';
import * as types from 'actions/actionTypes';
import { initialState } from './init';
import { MOVEMENTS } from '../constants';

/**
* Move tiles
*/
function moveTiles(state, direction) {
  let tiles = state.get('tiles');
  tiles = sortTiles(tiles, direction);
  tiles.forEach(tile => state = moveTile(state, tile, direction));
  return state;
}

/**
* Sort tiles by axe and value (prepare moving tiles)
*/
function sortTiles(tiles, direction) {
  const movement = MOVEMENTS[direction];
  tiles = tiles.sortBy(tile => tile.get(movement[0]));
  return tiles;
}

/**
* Move one tile: remove the previous one and add the new one
*/
function moveTile(state, tile, direction) {
  const available = findAvailableCell(state, tile, direction);

  if (available) {
    state = state.updateIn(['tiles'], arr => arr.delete(available.indexToRemove));
    if (available.idToMerge !== -1) {
      const index = state.get('tiles').findIndex(t => t.get('id') === available.idToMerge);
      state = state.updateIn(['tiles'], arr => arr.delete(index));
    }
    state = state.updateIn(['tiles'], arr => arr.push(available.newTile));
  }

  return state;
}

/**
* Find an available cell to move the tile
*/
function findAvailableCell(state, tile, direction) {
  let available, indexToRemove;
  let idToMerge = -1;
  const movement = MOVEMENTS[direction];
  const axle = movement[0];
  const from = tile.get(axle);
  const to = movement[1] < 0 ? 0 : 3;

  Range(to, from).forEach(i => {
    if (!available) {
      indexToRemove = state.get('tiles').findIndex(t => t.get('id') === tile.get('id'));
      let newTile = Map(tile.toJS());
      newTile = newTile.asMutable();
      newTile = axle === 'x' ? newTile.set('x', i) : newTile.set('y', i);
      if (isAvailable(state, newTile)) {
        available = Map(newTile);
      } else {
        idToMerge = getIdMergeable(state, newTile);
        if (idToMerge !== -1) {
          newTile = newTile.set('value', newTile.get('value') * 2);
          available = Map(newTile);
        }
      }
    }
  });
  return available ? { 'indexToRemove': indexToRemove, 'newTile': available, 'idToMerge': idToMerge } : undefined;
}

/**
* Returns true if cell is empty.
* Otherwise returns false.
*/
function isAvailable(state, tile) {
  const tileToGo = state.get('tiles').find(t => {
    return t.get('id') !== tile.get('id') && t.get('x') === tile.get('x') && t.get('y') === tile.get('y');
  });
  return !tileToGo;
}

/**
* Returns true if tiles have the same value.
* Otherwise returns false.
*/
function getIdMergeable(state, tile) {
  const tileMergeable = state.get('tiles').find(t => {
    return t.get('x') === tile.get('x') && t.get('y') === tile.get('y');
  });
  return tileMergeable.get('value') === tile.get('value') ? tileMergeable.get('id') : -1;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_GAME:
      return { ...state };
    case types.MOVE_TILES:
      return moveTiles(state, action.direction);
    default:
      return state;
  }
};
