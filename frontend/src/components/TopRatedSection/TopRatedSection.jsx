import { useMemo } from "react";
import { getTopRatedUnder200 } from "../../util/utils";
import useStore from "../../context/useStore";
import "./TopRatedSection.css";

const TopRatedSection = () => {
  const { food_list = [], cartItems, addToCart, removeFromCart } = useStore();

  const topFoods = useMemo(() => {
    if (!food_list.length) return [];

    return getTopRatedUnder200(food_list);
  }, [food_list]);

  if (!topFoods.length) return null;

  return (
    <div className="top-rated-section" id="explore-menu">
      <h2>⭐ Trending Under ₹200</h2>

      <div className="top-rated-grid">
        {topFoods.map((item) => (
          <div key={item._id} className="top-card">
            <div className="image-wrapper">
              <img src={item.image} alt={item.name} />

              <div className="add-btn-container">
                {cartItems[item._id] > 0 ? (
                  <div className="quantity-box">
                    <button onClick={() => removeFromCart(item._id)}>-</button>
                    <span>{cartItems[item._id]}</span>
                    <button onClick={() => addToCart(item._id)}>+</button>
                  </div>
                ) : (
                  <button className="add-btn" onClick={() => addToCart(item._id)}>
                    +
                  </button>
                )}
              </div>
            </div>

            <h4>{item.name}</h4>
            <p>₹ {item.price}</p>
            <span className="rating">⭐ {item.rating}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedSection;
