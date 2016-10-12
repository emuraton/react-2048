/*  eslint arrow-parens: ["error", "as-needed"] */
import * as actionTypes from './actionTypes';

/**
 * Initialize a new game.
 */
export function initGame() {
  return dispatch => {
    dispatch({
      type: actionTypes.INIT_GAME,
    });
  };
}

/**
 * Move tiles on the grid
 */
export function moveTiles(direction) {
  return dispatch => {
    dispatch({
      type: actionTypes.MOVE_TILES,
      direction,
    });
  };
}
