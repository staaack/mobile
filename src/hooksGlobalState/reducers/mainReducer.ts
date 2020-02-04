import { ReducerState, ReducerActions } from '../types';
import { GET_DATA } from '../constants/types';
import { Reducer } from 'react';

export const globalReducer: Reducer<ReducerState, ReducerActions> = (
  state,
  action,
) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
