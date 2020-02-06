import React from 'react';
import { GlobalContext } from './context';

export default function withGlobalContext(Component: React.ComponentType<any>) {
  return function contextComponent(props: any) {
    return (
      <GlobalContext.Consumer>
        {context => <Component {...props} context={context} />}
      </GlobalContext.Consumer>
    );
  };
}
