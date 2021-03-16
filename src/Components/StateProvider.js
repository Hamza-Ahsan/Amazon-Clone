// Setup the data Layer
// We need this to track the backet

import React, {createContext, useContext, useReducer} from 'react';

// This is the data Layer
export const StateContext = createContext();

// Build a Provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);