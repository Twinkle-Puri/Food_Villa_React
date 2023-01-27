import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import About from "./src/components/About";
import Body from "./src/components/Body";
// import { createBrowserHistory, RouterProvider } from "@remix-run/router";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Error from "./src/components/Error";
import ContactUs from "./src/components/ContactUs";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Profile from "./src/components/Profile";
//React.createElement  => object =>html(DOM)
// JSX = React.createElement => object  => html(DOM)

// destructing of props
// const RestaurantCard = ({name,
//     cuisines,
//     cloudinaryImageId,
//     lastMileTravelString,}) => {
//     return (
//         <div className="card">
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
//             <h2>{name}</h2>
//             <h4>{cuisines}</h4>
//             <h5>{lastMileTravelString} </h5>
//         </div>
//     )
// }
// const Body =()=>{
//     return <div className="restaurant-list">
//         {
//             restaurantList.map( res => {
//                 return <RestaurantCard  {...res.data} key ={res.data.id}/>
//             })
//         }
//     {/* <RestaurantCard restauratnt = {restaurantList[0]}/>
//     <RestaurantCard restauratnt = {restaurantList[1]}/>
//     <RestaurantCard restauratnt = {restaurantList[2]}/>
//     <RestaurantCard restauratnt = {restaurantList[3]}/> */}
//     {/* <RestaurantCard/>
//     <RestaurantCard/>
//     <RestaurantCard/>
//     <RestaurantCard/>
//     <RestaurantCard/> */}

//     {/* <h5>body</h5> */}
//     </div>
// }
// 2 types of routing client & server side routing.
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      {/* <About /> */}
      {/* <ContactUs/> */}
      {/* <Route exact path="/about" component={About} /> */}
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </React.Fragment>
    // Header
    //  -logo,nav,search
    // body
    //     -search bar
    //     - restaurant FileList
    //     - rest Clipboa
    //          image,name,rating,cusins
    //footer -lines,copyright
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "/about/profile",
            element: <Profile /> // parent path/{path}
          },
        ]
      },
      { path: "/contact", element: <ContactUs /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
  },
]);

// return (<)
// };

// we can only have one root element & one render method
const rootR = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside root
// rootR.render(<AppLayout/>);
rootR.render(<RouterProvider router={appRouter}></RouterProvider>);

// functional componennts
// const heading = () => {
// return (<h1>Hello react</h1>)
// };

// const heading7 = () => (<h1>Hello react</h1>);
//both are  same
