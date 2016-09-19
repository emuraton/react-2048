import {Map} from 'immutable';
import * as types from 'actions/actionTypes';
import {initialState} from './init';

export default (state = initialState, action) => {
  switch (action.type){
    case types.INIT_GAME:
      return {...state};
    default:
      return state;
  }
}
