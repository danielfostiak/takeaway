import React from "react";
import Card from "../UI/Card";
import FoodList from "./FoodList";
import "./Info.css";

function Info(props) {
  const { info } = props;
  let price = 0;
  let calories = 0;
  const totalItems = info.length;
  for (const order of info) {
    price += +order.price;
  }
  const uniqueRestaurants = [...new Set(info.map((item) => item.restaurant))];
  const restaurantCount = uniqueRestaurants.length;

  return (
    <Card className="info-container">
      <Card className="info-box">
        <h3>Total price:</h3> <Card className="info-data">£{price}</Card>
      </Card>
      <Card className="info-box">
        <h3>Total calories:</h3> <Card className="info-data">{calories}</Card>
      </Card>
      <Card className="info-box">
        <h3>Total items:</h3> <Card className="info-data">{totalItems}</Card>
      </Card>
      <Card className="info-box">
        <h3>Restaurant(s):</h3>{" "}
        <Card className="info-data">{restaurantCount}</Card>
      </Card>
    </Card>
  );
}

export default Info;
