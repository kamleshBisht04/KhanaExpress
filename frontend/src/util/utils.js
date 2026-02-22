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
