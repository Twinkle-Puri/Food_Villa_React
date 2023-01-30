import userContext from "../Utils/userContext";
import { useContext } from "react";
const RestaurantCard = ({name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString}) => {
        const {user} = useContext(userContext);
    return (
        <div className="card w-52 p-2 m-2 shadow-lg bg-slate-200 " >
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
            <h2 className="font-bold">{name}</h2>
            <h4>{cuisines.join(', ')}</h4>
            <h5>{lastMileTravelString} </h5>
            <h6>{user.name} - {user.email}</h6>           
        </div>
    )
} 

export default RestaurantCard;