import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
import { promoCodes } from "../util/constant";

const StoreContext = createContext(null);

function StoreContextProvider({ children }) {
  const [cartItems, setCartItems] = useState({});
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showLogin, setShowLogin] = useState(false);
  const [promo, setPromo] = useState({
    code: "",
    isValid: false,
    error: "",
  });

  const applyPromo = (code, subtotal) => {
    const upperCode = code.toUpperCase();
    // Check if promo exists
    if (!promoCodes[upperCode]) {
      setPromo({ code: "", isValid: false, error: "Invalid Code" });
      return;
    }
    // Check minimum order
    if (subtotal < 200) {
      setPromo({ code: "", isValid: false, error: "Min ₹200 required" });
      return;
    }
    //  Only one promo active at a time
    setPromo({ code: upperCode, isValid: true, error: "" });
  };

  const discountCalculator = (subtotal) => {
    if (!promo?.isValid) return 0;

    const promoData = promoCodes[promo.code];
    if (!promoData) return 0;

    if (promoData.type === "fixed") {
      return promoData.value;
    }

    if (promoData.type === "percent") {
      return (subtotal * promoData.value) / 100;
    }

    return 0;
  };

  const filteredFoods = food_list.filter((item) => {
    const matchesCategory = category === "All" || category === item.category;

    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const currentQuantity = prev[itemId] ?? 0;
      const update = { ...prev, [itemId]: currentQuantity + 1 };
      if (promo.isValid) setPromo({ code: "", isValid: false, error: "" });

      return update;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const currentQuantity = prev[itemId];
      if (currentQuantity == null) return prev;

      const updated = { ...prev };
      if (currentQuantity <= 1) delete updated[itemId];
      else updated[itemId] = currentQuantity - 1;

      // reset promo if active
      if (promo.isValid) setPromo({ code: "", isValid: false, error: "" });

      return updated;
    });
  };

  const removeItemCompletely = (id) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[id]; // completely remove
      if (promo.isValid) setPromo({ code: "", isValid: false, error: "" });
      return updated;
    });
  };

  // useEffect(() => {}, [cartItems]);

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
        promo,
        applyPromo,
        discountCalculator,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContext, StoreContextProvider };
