import { createContext, useContext, useReducer } from 'react';
import products from '../data/products';
import { shopReducer } from './Reducers';

const Shop = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, {
    products: products,
    cart: [],
    cartTotal: 0,
  });

  return <Shop.Provider value={{ state, dispatch }}>{children}</Shop.Provider>;
};

const ShopContext = () => useContext(Shop);

export { Context, ShopContext };
