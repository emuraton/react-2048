/**
 * Directions
 */
export const UP = 1;
export const LEFT = 2;
export const DOWN = 3;
export const RIGHT = 4;

export const DIRECTIONS = {
  38: UP,
  37: LEFT,
  40: DOWN,
  39: RIGHT
};

/**
 * Movements
 */
export const MOVEMENTS = [];
MOVEMENTS[UP] = ['y', -1];
MOVEMENTS[DOWN] = ['y', 1];
MOVEMENTS[LEFT] = ['x', -1];
MOVEMENTS[RIGHT] = ['x', 1];
