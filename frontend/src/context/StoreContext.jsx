import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

const StoreContext = createContext(null);

function StoreContextProvider({ children }) {
  const [cartItems, setCartItems] = useState({});
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showLogin, setShowLogin] = useState(false);

  const filteredFoods = food_list.filter((item) => {
    const matchesCategory = category === "All" || category === item.category;

    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

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

  const removeItemCompletely = (id) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[id]; // ✅ completely remove
      return updated;
    });
  };

  useEffect(() => {}, [cartItems]);

  return (
    <StoreContext.Provider
      value={{
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        removeItemCompletely,
        search,
        setSearch,
        category,
        setCategory,
        filteredFoods,
        showLogin,
        setShowLogin,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContext, StoreContextProvider };
