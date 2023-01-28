import { useState } from "react";
import logo from "./assets/images/logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline";
 
 const Title = () => {
    
    return (
        <a href="/">
            <img  className="logo" alt ="logo" src ={logo}/>
        </a>
        // <h1 className="title" key="h1">Food Villa</h1>
    )
}
 const Header =() => {
    const [isLogIn,setLoginUser] = useState(false);
    const isOnline = useOnline();
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <Link to="/">
                    <li>Home</li>
                    </Link>
                    <Link to="/about">
                    <li>About</li>
                    </Link>
                    <Link to="/contact">

                    <li>Contact</li>
                    </Link>
                    <li>Cart</li>
                    <Link to="/instamart">
                    <li>Instamart</li>
                    </Link>
                </ul>
            </div>
            {/* <h2>Header component</h2> */}
            <h1>{isOnline ?  "Online" : "Offline"} </h1>
            { isLogIn ? 
            <button onClick={e => setLoginUser(false)}>LogOut</button>:
            <button onClick={e => setLoginUser(true)}>LogIn</button>
            }
        </div>
    )
}

export default Header;