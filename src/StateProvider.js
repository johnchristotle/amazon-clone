import React, { useContext, useReducer, createContext } from "react";

//preparing the datalayer
export const StateContext = createContext();

//wrap our app and provide the datalayer
export const StateProvider = ({ reducer, initialState, children }) => {
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
};

//pull information from the datalayer
export const useStateValue = () => useContext(StateContext);