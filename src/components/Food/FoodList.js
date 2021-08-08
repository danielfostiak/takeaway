import React from "react";
import FoodItem from "./FoodItem";
import "./FoodList.css";

function FoodList(props) {
  return (
    <div className="food-list-container">
      {props.items.map((item) => (
        <FoodItem title={item.title} price={item.price} key={item.id} />
      ))}
    </div>
  );
}

export default FoodList;
