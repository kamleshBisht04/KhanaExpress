import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { promoCodes } from "../../util/constant";
import { getCartCalculations } from "../../util/utils";
import useStore from "../../context/useStore";
import RandomPromoSuggestion from "../../components/RandomPromoSuggestion/RandomPromoSuggestion";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const [inputCode, setInputCode] = useState("");
  const {
    food_list,
    cartItems,
    removeFromCart,
    addToCart,
    removeItemCompletely,
    promo,
    applyPromo,
    discountCalculator,
  } = useStore();

  const { subtotal, deliveryFee, discount, finalTotal } = useMemo(() => {
    return getCartCalculations(food_list, cartItems, discountCalculator);
  }, [food_list, cartItems, discountCalculator]);

  const cartProducts = food_list.filter((item) => cartItems[item._id] && cartItems[item._id] > 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {cartProducts.length === 0 && <p className="empty-cart">Your cart is empty 🛒</p>}

        {cartProducts.map((item) => {
          return (
            <React.Fragment key={item._id}>
              <div className="cart-items-title cart-items-item">
                <img src={item.image} alt={item.name} />
                <p className="item-title">{item.name}</p>
                <p>₹ {item.price}</p>
                {/* <p className="item-quantity">{cartItems[item._id]}</p> */}
                <div className="quantity-control">
                  <button onClick={() => removeFromCart(item._id)}>-</button>
                  <span>{cartItems[item._id]}</span>
                  <button onClick={() => addToCart(item._id)}>+</button>
                </div>
                <p className="item-title"> ₹ {item.price * cartItems[item._id]}</p>
                <p className="cross" onClick={() => removeItemCompletely(item._id)}>
                  x
                </p>
              </div>
              <br />
              <hr />
            </React.Fragment>
          );
        })}
        {subtotal < 200 && subtotal > 0 && (
          <p className="delivery-msg">Add ₹ {200 - subtotal} more for FREE delivery 🚚</p>
        )}

        {subtotal >= 200 && <p className="free-delivery">🎉 You got FREE delivery!</p>}
      </div>
      {/* promo section and place order section */}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotals</p>
              <p>₹ {subtotal}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹ {deliveryFee}</p>
            </div>
            {discount > 0 && (
              <>
                <div className="cart-total-details">
                  <p>Discount</p>
                  <p>- ₹ {discount}</p>
                </div>
                <hr />
              </>
            )}
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹ {finalTotal}</b>
            </div>
          </div>
          <button disabled={subtotal === 0} onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <RandomPromoSuggestion promoCodes={promoCodes} />
            <p>If you have a promocode, Enter it here</p>
            <div className="cart-promocode-input">
              <input
                type="text"
                placeholder="promo code"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
              />
              <button onClick={() => applyPromo(inputCode, subtotal)}>Submit</button>
            </div>
            {inputCode && promo.error && <p className="promo-error">{promo.error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
