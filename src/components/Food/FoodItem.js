import React from "react";
import "./FoodItem.css";
import Card from "../UI/Card";

function FoodItem(props) {
  return (
    <Card className="food-item-list">
      <p className="food-item-title">{props.title}</p>{" "}
      <p className="food-item-price">£{props.price}</p>
      <img
        className="food-item-image"
        src={
          props.image ||
          "https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"
        }
        alt=""
      />
    </Card>
  );
}

export default FoodItem;
