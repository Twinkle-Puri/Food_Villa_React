const RestaurantCard = ({name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,}) => {
    return (
        <div className="card w-52 p-2 m-2 shadow-lg bg-slate-200 " >
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
            <h2 className="font-bold">{name}</h2>
            <h4>{cuisines.join(', ')}</h4>
            <h5>{lastMileTravelString} </h5>
        </div>
    )
} 

export default RestaurantCard;