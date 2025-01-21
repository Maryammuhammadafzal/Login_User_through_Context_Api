import React, { createContext, useReducer } from 'react'
import { reducer } from './reducer';
export const GlobalContext = createContext("Initial Value");
let data = {
  user: {
    userName : "John Doe",
    email : "exmple@gmil.com",
    subject: "computer"
  },
  darkTheme: true
}


export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, data)
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}