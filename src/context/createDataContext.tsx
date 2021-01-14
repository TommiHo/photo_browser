import React, { useReducer } from "react";

const createDataContext = (
  reducer: any,
  actions: { [key: string]: (dispatch: any) => any },
  initialState: any
): any => {
  const Context = React.createContext<any>(null);

  const Provider = ({
    children,
  }: {
    children: [] | JSX.Element;
  }): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const boundActions: { [key: string]: string } = {};
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
};

export default createDataContext;
