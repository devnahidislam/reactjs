import React, { createContext, useReducer, useEffect } from 'react';
import './cart.css';
import { products } from './Products';
import ContextCart from './ContextCart';
import {reducer} from './reducer';

export const cartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0
}
const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payLoad: id
    });
  };

  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  // Increment btn
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payLoad: id
    });
  };

  // Decrement btn
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payLoad: id
    });
  };

  useEffect(() => {
    dispatch({ type: "GET-TOTAL" });
  }, [state.item]);


  return (
    <cartContext.Provider value={{ ...state, removeItem, clearCart, increment, decrement }}>
      <ContextCart />
    </cartContext.Provider>
  )
}

export default Cart;
