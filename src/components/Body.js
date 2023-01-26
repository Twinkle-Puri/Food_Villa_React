import { useEffect, useState } from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  
    );
return filterData;
  }


const Body = () => {
  // Avoid rendering component
  const [allRestaurants,setAllRestaurants]= useState([])
  const [filterRestaurant, setFilterRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  useEffect(()=>{
     getRestaurants()
  },[])

  // empty dependency array => once after render
  // dep arry [searchText] => once after initial render + everytime after redern (my searchText changes)
  
  async function getRestaurants(){
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
        const response = await data.json();
        setAllRestaurants(response?.data?.cards[2]?.data?.data?.cards);
        setFilterRestaurants(response?.data?.cards[2]?.data?.data?.cards);

        console.warn(response,"response")
  }

  //not render early return
  if(!allRestaurants) return null;
//  if(filterRestaurant.length === 0) return<h1>No restaurant found</h1>
  return(filterRestaurant.length===0)? <ShimmerUI/>: (
    <>
    
      <div className="search-container">
        <input
          type="text"
          value={searchTxt}
          className="search-input"
          placeholder="Search"
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={(e) => {
            // e.preventDefault()
            const data = filterData(searchTxt, allRestaurants);
            // update the state - restaurants
            setFilterRestaurants(data);
          }}
        >
          Search 
        </button>
      </div>
      <div className="restaurant-list">
{filterRestaurant.map((res) => {
          return <RestaurantCard {...res.data} key={res.data.id} />;
        })}

      </div>
    </>
  );
  {
    /* <RestaurantCard restauratnt = {restaurantList[0]}/>
    <RestaurantCard restauratnt = {restaurantList[1]}/>
    <RestaurantCard restauratnt = {restaurantList[2]}/>
    <RestaurantCard restauratnt = {restaurantList[3]}/> */
  }
  {
    /* <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/> */
  }

  {
    /* <h5>body</h5> */
  }
};
export default Body;
