import React, { createContext, useReducer } from "react";
import axios from "axios";

export const productsContext = createContext();

const INIT_STATE = {
  products: [2222],
};

function reducer(state = INIT_STATE, action) {}

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  return (
    <productsContext.Provider value={{}}>{children}</productsContext.Provider>
  );
};
