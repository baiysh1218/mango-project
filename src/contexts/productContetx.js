import React, { createContext, useReducer } from "react";
import axios from "axios";

export const productsContext = createContext();

const INIT_STATE = {
  products: [],
};

function reducer(state = INIT_STATE, action) {}

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
};

export default ProductsContextProvider;
