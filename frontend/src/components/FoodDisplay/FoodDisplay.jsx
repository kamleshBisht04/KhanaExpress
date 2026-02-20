import React from "react";
import "./FoodDisplay.css";
import useStore from "../../context/useStore";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = () => {
  const { filteredFoods } = useStore();

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {filteredFoods.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
