import { useState } from "react";
import logo from "./assets/images/logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline";
 
 const Title = () => {
    
    return (
        <a href="/">
            <img  className="h-28 pl-2"  alt ="logo" src ={logo}/>
        </a>
        // <h1 className="title" key="h1">Food Villa</h1>
    )
}
 const Header =() => {
    const [isLogIn,setLoginUser] = useState(false);
    const isOnline = useOnline();
    return(
        <div className="flex justify-between bg-slate-400 sm:bg-slate-800 md:bg-gray-300">
            <Title/>
            <div className="nav-items">
                <ul class="flex py-10">
                    <Link to="/">
                    <li className="px-2">Home</li>
                    </Link>
                    <Link to="/about">
                    <li className="px-2">About</li>
                    </Link>
                    <Link to="/contact">

                    <li className="px-2">Contact</li>
                    </Link>
                    <li className="px-2">Cart</li>
                    <Link to="/instamart">
                    <li className="px-2">Instamart</li>
                    </Link>
                </ul>
            </div>
            {/* <h2>Header component</h2> */}
            <h1 className="py-10 px-2">{isOnline ?  "Online" : "Offline"} </h1>
            { isLogIn ? 
            <button onClick={e => setLoginUser(false)} className="py-10 px-2">LogOut</button>:
            <button onClick={e => setLoginUser(true)} className="py-10 px-2">LogIn</button>
            }
        </div>
    )
}

export default Header;