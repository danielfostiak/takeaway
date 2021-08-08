import React, { useState } from "react";

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
  //   `Restaurant: ${selectedRestaurant.name} \n Food: ${selectedOption.name}`
  // );

  const handleRestaurantChange = (e) => {
    console.log(e.target.children); // Search through this for the option with the same value as the e.target.value, get the id of the element, replace next find using id instead now
    const newRestaurant = props.restaurants.find(
      (restaurant) => restaurant.name === e.target.value
    );
    setSelectedRestaurant(newRestaurant);
    setDisplayedOptions(newRestaurant.options);
  };

  const handleOptionChange = (e) => {
    console.log();
  };

  return (
    <div>
      <form>
        <select onChange={handleRestaurantChange}>
          {props.restaurants.map((restaurant) => {
            return (
              <option id={restaurant.id} key={restaurant.id}>
                {restaurant.name}
              </option>
            );
          })}
        </select>
        <select onChange={handleOptionChange}>
          {displayedOptions.map((option) => {
            // console.log(option);
            return <option key={option.id}>{option.name}</option>;
          })}
        </select>
      </form>
    </div>
  );
}

export default AddFood;
