import { createContext, useEffect, useState } from 'react';
import { menuItems } from '../assets';

export const StoreContext = createContext(null);

const StoreProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addCartItems = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeCartItems = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    menuItems,
    cartItems,
    setCartItems,
    addCartItems,
    removeCartItems,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
