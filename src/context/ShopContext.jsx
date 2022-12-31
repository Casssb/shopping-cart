import { createContext, useContext, useMemo, useReducer } from 'react';
import products from '../data/products';
import { shopReducer } from './Reducers';

const Shop = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, {
    products: products,
    cart: [],
  });

  const cachedState = useMemo(
    () => ({
      state,
    }),
    [state]
  );

  return <Shop.Provider value={{ cachedState, dispatch }}>{children}</Shop.Provider>;
};

const ShopContext = () => useContext(Shop);

export { Context, ShopContext };
