// Generic Context file. Allow any type here
/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { useReducer } from "react";

export default function createDataContext(
  reducer: (state: any, action: { type: string; payload: any }) => any,
  actions: any,
  initialState: any
): any {
  const Context = React.createContext<any>(null);

  const Provider = ({
    children,
  }: {
    children: [] | JSX.Element;
  }): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const boundActions: { [key: string]: Promise<void> } = {};
    for (const key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
}
