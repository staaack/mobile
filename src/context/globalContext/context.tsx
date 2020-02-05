import React, { Context, Dispatch, ReducerAction } from 'react';
import { globalReducer, initialState } from '../../hooksGlobalState';

export interface TGlobalContext {
  state: any;
  dispatch: Dispatch<{
    type: string;
    payload: any;
  }>;
}

export const GlobalContext: Context<TGlobalContext> = React.createContext<
  TGlobalContext
>({
  state: null,
  dispatch: () => {},
});

export const GlobalStateProvider: React.SFC<{}> = React.memo(
  ({ children }): JSX.Element => {
    const [state, dispatch] = React.useReducer<any, ReducerAction<any>>(
      globalReducer,
      initialState,
      () => {}, // this is the initializer function without action or type
    );

    return (
      <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
      </GlobalContext.Provider>
    );
  },
);
