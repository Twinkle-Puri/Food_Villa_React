import { FETCH_API } from "../constant";
import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  
  async function getRestaurantInfo() {
    const data = await fetch(FETCH_API + resId);
    const json = await data.json();
    setRestauraunt(json.data);
  }
  return restaurant;
};

export default useRestaurant;