import React, { useState } from "react";
import FoodList from "./components/Food/FoodList";
import AddFood from "./components/Food/AddFood";
import Info from "./components/Food/Info";
import "./App.css";

// const dummyFoodList = [
//   { title: "Chicken", price: "6", id: Math.random() },
//   { title: "Hotdog", price: "3", id: Math.random() },
//   { title: "Pizza", price: "9", id: Math.random() },
//   { title: "Chicken", price: "6", id: Math.random() },
//   { title: "Hotdog", price: "3", id: Math.random() },
//   { title: "Pizza", price: "9", id: Math.random() },
// ];

function App() {
  const [foodList, setFoodList] = useState([]);

  const restaurantList = [
    {
      name: "Italian",
      options: [
        { name: "Pasta", price: "5", id: Math.random() },
        { name: "Pizza", price: "5", id: Math.random() },
      ],
      id: Math.random(),
    },
    {
      name: "Chinese",
      options: [
        { name: "Duck wrap", price: "5", id: Math.random() },
        { name: "Prawns", price: "5", id: Math.random() },
      ],
      id: Math.random(),
    },
    {
      name: "Mexican",
      options: [
        { name: "Tortilla", price: "5", id: Math.random() },
        { name: "Beans", price: "5", id: Math.random() },
      ],
      id: Math.random(),
    },
  ];

  const addItem = (order) => {
    console.log("App", order);
    const newItem = {
      title: order.option.name,
      price: order.option.price,
      restaurant: order.restaurant.name,
      id: order.option.id,
    };
    setFoodList(() => [...foodList, newItem]);
  };

  console.log(foodList);

  return (
    <div className="app">
      <Info info={foodList} />
      <AddFood restaurants={restaurantList} liftOrder={addItem} />
      <FoodList items={foodList} />
    </div>
  );
}

export default App;
