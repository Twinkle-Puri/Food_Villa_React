import { useState,useEffect } from "react";

const useGetRest = () => {
    const [allRestaurants,setAllRestaurants]= useState([])
  const [filterRestaurant, setFilterRestaurants] = useState([]);
  useEffect(()=>{
    getRestaurants()
 },[])
    async function getRestaurants(){
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
            const response = await data.json();
            setAllRestaurants(response?.data?.cards[2]?.data?.data?.cards);
            setFilterRestaurants(response?.data?.cards[2]?.data?.data?.cards);
    
            console.warn(response,"response")
      }
    return [allRestaurants,filterRestaurant]
}
export default useGetRest;