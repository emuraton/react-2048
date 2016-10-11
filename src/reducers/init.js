import {List, Map} from 'immutable';

export const initialState = Map({
  score: 0,
  result: 0,
  grid: {
    size: 4
  },
  tiles: List.of(
    Map({
      id: 'tile-1',
      x: 0,
      y: 2,
      value: 2
    }),
    Map({
      id: 'tile-2',
      x: 1,
      y: 1,
      value: 2
    })
  )
});
