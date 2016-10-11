import {List, Map, Range} from 'immutable';
import * as types from 'actions/actionTypes';
import {initialState} from './init';
import {MOVEMENTS} from '../constants';

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

  if(available) {
    state = state.updateIn(['tiles'], arr => arr.delete(available.indexToRemove));
    state = state.updateIn(['tiles'], arr => arr.push(available.newTile));
  }

  return state;
}

/**
* Find an available cell to move the tile
*/
function findAvailableCell(state, tile, direction) {
  let available, index;
  const movement = MOVEMENTS[direction];
  const axle = movement[0];
  const from = tile.get(axle);
  const to = movement[1] < 0 ? 0 : 3;

  Range(to, from).forEach( i => {
    if(!available) {
      index = state.get('tiles').findIndex(t => t.get('id') === tile.get('id'));
      let newTile = Map(tile);
      newTile = axle === 'x' ? newTile = newTile.set('x', i) : newTile = newTile.set('y', i);
      if(isAccessible(state, newTile))  available = newTile;
    }
  });

  return available ? {indexToRemove: index, newTile: available} : undefined;
}

/**
* Returns if cell is empty or have th same value than the tile to move.
* Otherwise returns false.
*/
function isAccessible(state, tile) {
  let tileToGo = state.get('tiles').find(t => {return t.get('x') === tile.get('x') && t.get('y') === tile.get('y')});

  if(!tileToGo || tileToGo.get('value') === tile.get('value')) return true;
  return false;
}

export default (state = initialState, action) => {
  switch (action.type){
    case types.INIT_GAME:
      return {...state};
    case types.MOVE_TILES:
      return moveTiles(state, action.direction);
    default:
      return state;
  }
}
