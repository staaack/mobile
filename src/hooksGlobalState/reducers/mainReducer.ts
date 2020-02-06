import { Reducer } from 'react';

import { GET_DATA, SET_SELECTED_MEMBER } from '../constants/types';
import { TReducerState, TReducerActions } from '../types';

export const globalReducer: Reducer<TReducerState, TReducerActions> = (
  state,
  action,
) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SET_SELECTED_MEMBER:
      return {
        ...state,
        selectedEngineer: action.payload,
      };
    default:
      return state;
  }
};
