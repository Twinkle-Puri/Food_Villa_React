import React, { lazy, Suspense, useState ,useContext} from "react";
import ReactDOM from "react-dom/client"
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
// import About from "./src/components/About";
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
import ShimmerUI from "./src/components/ShimmerUI";
import { Provider } from "react-redux";
import store from "./src/Utils/Store";
import UserContext from "./src/Utils/userContext";
import Cart from "./src/components/Cart";
// import Instamart from "./src/components/Instamart";
const  Instamart = lazy(() => import("./src/components/Instamart"));
const About = lazy(() => import("./src/components/About"))
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
  const [user,setUser] = useState({
    name:'Twinkle',
    email:'namastedev.com'});

  return (
    <Provider store={store}>
    <UserContext.Provider value = {{user:user,
    setUser:setUser}}>
      <Header />
      {/* <About /> */}
      {/* <ContactUs/> */}
      {/* <Route exact path="/about" component={About} /> */}
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
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
      { path: "/", element: <Body  user = {{
        name:'Twinkle',
        email:'namastedev.com'
      }} /> },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>,
        children: [
          {
            path: "/about/profile",
            element: <Profile />, // parent path/{path}
          },
        ],
      },
      { path: "/contact", element: <ContactUs /> },
      { path: "/cart", element: <Cart /> },
      {path:"/instamart",element:<Suspense fallback={<ShimmerUI/>}><Instamart/> </Suspense>},
      { path: "/restaurant/:resId", element: <RestaurantMenu /> }
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
