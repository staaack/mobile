import React, { Context, Dispatch, Reducer } from 'react';
import {
  globalReducer,
  initialState,
  TReducerDispatcher,
  TReducerState,
} from '../../hooksGlobalState';

export interface TGlobalContext {
  state: TReducerState;
  dispatch: Dispatch<{
    type: string;
    payload: any;
  }>;
}

export const GlobalContext: Context<TGlobalContext> = React.createContext<
  TGlobalContext
>({
  state: { data: null },
  dispatch: () => {},
});

export const GlobalStateProvider: React.SFC<{}> = React.memo(
  ({ children }): JSX.Element => {
    const [state, dispatch] = React.useReducer<
      Reducer<TReducerState, TReducerDispatcher>
    >(globalReducer, initialState);

    return (
      <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
      </GlobalContext.Provider>
    );
  },
);
