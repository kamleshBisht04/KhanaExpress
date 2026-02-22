import React from "react";
import "./Cart.css";
import useStore from "../../context/useStore";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { food_list, cartItems, removeFromCart, addToCart, removeItemCompletely } = useStore();

  const subtotal = food_list.reduce(
    (total, item) => (cartItems[item._id] > 0 ? total + item.price * cartItems[item._id] : total),
    0,
  );

  const deliveryFee = subtotal > 200 ? 0 : 40;
  const totalAmount = subtotal + deliveryFee;

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
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div key={index} className="cart-items-title cart-items-item">
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
              </>
            );
          }
        })}
        <p>⭐Delivery Free order price is more than 200</p>
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
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹ {totalAmount}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
