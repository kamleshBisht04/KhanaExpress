// src/utils/cartUtils.js

export const getCartCalculations = (foodList, cartItems, discountCalculator) => {
  const subtotal = foodList.reduce(
    (total, item) => total + item.price * (cartItems[item._id] || 0),
    0,
  );

  const deliveryFee = subtotal > 0 && subtotal <= 200 ? 40 : 0;

  const discount = discountCalculator ? discountCalculator(subtotal) : 0;

  const finalTotal = subtotal + deliveryFee - discount;

  return {
    subtotal,
    deliveryFee,
    discount,
    finalTotal,
  };
};


export const getTopRatedUnder200 = (food_list) => {
  if (!food_list || food_list.length === 0) return [];

  const filtered = food_list.filter(
    (item) => item.rating >= 4 && item.price <= 200
  );

  return filtered
    .sort(() => 0.5 - Math.random())
    .slice(0, 8);
};
