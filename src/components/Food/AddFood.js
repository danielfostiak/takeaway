import React, { useState } from "react";
import Card from "../UI/Card";
import "./AddFood.css";

function AddFood(props) {
  const [selectedRestaurant, setSelectedRestaurant] = useState(
    props.restaurants[0]
  );

  const [displayedOptions, setDisplayedOptions] = useState(
    props.restaurants[0].options
  );

  const [selectedOption, setSelectedOption] = useState(
    props.restaurants[0].options[0]
  );

  // console.log(
  //   `Selected Restaurant ${selectedRestaurant.name} \n Displayed Options ${displayedOptions} \n Selected Option ${selectedOption}`
  // );

  const handleRestaurantChange = (e) => {
    const restaurantsNodeList = [...e.target.children];
    const selectedNode = restaurantsNodeList.find(
      (node) => node.innerHTML === e.target.value
    );
    // Search through this for the option with the same value as the e.target.value, get the id of the element, replace next find using id instead now
    const newRestaurant = props.restaurants.find(
      (restaurant) => restaurant.id == selectedNode.id
    );
    setSelectedRestaurant(newRestaurant);
    setDisplayedOptions(newRestaurant.options);
    setSelectedOption(newRestaurant.options[0]);
  };

  const handleOptionChange = (e) => {
    const optionsNodeList = [...e.target.children];
    const selectedNode = optionsNodeList.find(
      (node) => node.innerHTML === e.target.value
    );
    const newOption = selectedRestaurant.options.find(
      (option) => option.id == selectedNode.id
    );
    setSelectedOption(newOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(selectedRestaurant);
    // setSelectedRestaurant(selectedRestaurant);
    // Lift state
    props.liftOrder({ restaurant: selectedRestaurant, option: selectedOption });
  };

  return (
    <>
      <Card className="add-food-current-price">£15</Card>
      <Card className="add-food-container">
        <form onSubmit={handleSubmit}>
          <select
            className="add-food-restaurant"
            value={selectedRestaurant.name}
            onChange={handleRestaurantChange}
          >
            {props.restaurants.map((restaurant) => {
              return (
                <option id={restaurant.id} key={restaurant.id}>
                  {restaurant.name}
                </option>
              );
            })}
          </select>
          <select className="add-food-option" onChange={handleOptionChange}>
            {displayedOptions.map((option) => {
              // console.log(option);
              return (
                <option id={option.id} key={option.id}>
                  {option.name} £{option.price}
                </option>
              );
            })}
          </select>
          <input className="add-food-submit" type="submit"></input>
        </form>
      </Card>
    </>
  );
}

export default AddFood;
