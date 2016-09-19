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
