import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

const StoreContext = createContext(null);

function StoreContextProvider({ children }) {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const currentQuantity = prev[itemId] ?? 0;
      return { ...prev, [itemId]: currentQuantity + 1 };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const currentQuantity = prev[itemId];
      if (currentQuantity == null) {
        return prev;
      }
      if (currentQuantity <= 1) {
        const updateItems = { ...prev };
        delete updateItems[itemId];
        return updateItems;
      }
      return {
        ...prev,
        [itemId]: currentQuantity - 1,
      };
    });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <StoreContext.Provider
      value={{
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContext, StoreContextProvider };
