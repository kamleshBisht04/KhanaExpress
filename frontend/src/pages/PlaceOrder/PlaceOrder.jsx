import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../context/useStore";
import "./PlaceOrder.css";
import { getCartCalculations } from "../../util/utils";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const { food_list, cartItems, discountCalculator } = useStore();
  const { subtotal, deliveryFee, discount, finalTotal } = getCartCalculations(
    food_list,
    cartItems,
    discountCalculator,
  );

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleOrder = () => {
    if (subtotal === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill all required fields");
      return;
    }

    alert("🎉 Order Placed Successfully!");
    navigate("/");
  };

  return (
    <div className="checkout-container">
      {/* LEFT SECTION */}
      <div className="checkout-left">
        {/* Delivery Card */}
        <div className="checkout-card">
          <h3>Delivery Details</h3>
          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} />
          <input name="address" placeholder="Full Address" onChange={handleChange} />
          <div className="row">
            <input name="city" placeholder="City" onChange={handleChange} />
            <input name="pincode" placeholder="Pincode" onChange={handleChange} />
          </div>
        </div>

        {/* Payment Card */}
        <div className="checkout-card">
          <h3>Payment Method</h3>

          <label className="payment-option">
            <input
              type="radio"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            Cash on Delivery
          </label>

          <label className="payment-option">
            <input
              type="radio"
              checked={paymentMethod === "upi"}
              onChange={() => setPaymentMethod("upi")}
            />
            UPI
          </label>

          <label className="payment-option">
            <input
              type="radio"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            Credit / Debit Card
          </label>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="checkout-right">
        <div className="summary-card">
          <h3>Order Summary</h3>

          {food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id} className="summary-item">
                  <span>
                    {item.name} × {cartItems[item._id]}
                  </span>
                  <span>₹ {item.price * cartItems[item._id]}</span>
                </div>
              );
            }
            return null;
          })}

          <hr />

          <div className="price-row">
            <span>Subtotal</span>
            <span>₹ {subtotal}</span>
          </div>

          <div className="price-row">
            <span>Delivery</span>
            <span>₹ {deliveryFee}</span>
          </div>

          <div className="price-row discount">
            <span>Discount</span>
            <span>- ₹ {discount}</span>
          </div>

          <div className="price-row total">
            <span>Total</span>
            <span>₹ {finalTotal}</span>
          </div>

          <button className="place-btn" onClick={handleOrder}>
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
