import React from "react";
import FoodList from "./components/Food/FoodList";
import AddFood from "./components/Food/AddFood";
import "./App.css";

function App() {
  const foodList = [
    { title: "Chicken", price: "6", id: Math.random() },
    { title: "Hotdog", price: "3", id: Math.random() },
    { title: "Pizza", price: "9", id: Math.random() },
    { title: "Bread", price: "5", id: Math.random() },
    { title: "Chicken", price: "6", id: Math.random() },
    { title: "Hotdog", price: "3", id: Math.random() },
    { title: "Pizza", price: "9", id: Math.random() },
    { title: "Bread", price: "5", id: Math.random() },
    { title: "Hotdog", price: "3", id: Math.random() },
    { title: "Pizza", price: "9", id: Math.random() },
    { title: "Hotdog", price: "3", id: Math.random() },
    { title: "Pizza", price: "9", id: Math.random() },
    { title: "Bread", price: "5", id: Math.random() },
    { title: "Hotdog", price: "3", id: Math.random() },
    { title: "Pizza", price: "9", id: Math.random() },
  ];

  const restaurantList = [
    {
      name: "Italian",
      options: [
        { name: "Pasta", id: Math.random() },
        { name: "Pizza", id: Math.random() },
      ],
      id: Math.random(),
    },
    {
      name: "Chinese",
      options: [
        { name: "Duck wrap", id: Math.random() },
        { name: "Prawns", id: Math.random() },
      ],
      id: Math.random(),
    },
    {
      name: "Mexican",
      options: [
        { name: "Tortilla", id: Math.random() },
        { name: "Beans", id: Math.random() },
      ],
      id: Math.random(),
    },
  ];

  return (
    <div className="app">
      <AddFood restaurants={restaurantList} />
      <FoodList items={foodList} />
    </div>
  );
}

export default App;
