import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./ShimmerUI";
import useRestaurant from "../Utils/useRestaurant";
import { addItem } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { resId } = useParams();
  // Use proper names
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
    //dispatch an action and send the value
  };
  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex" style={{ display: "flex" }}>
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>
              {item.name} -
              <button
                className="p-1 m-1 bg-green-100"
                onClick={() => addFoodItem(item)}
              >
                Add Item
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
