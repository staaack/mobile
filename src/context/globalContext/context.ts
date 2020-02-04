import React, { Context, Dispatch } from 'react';

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
