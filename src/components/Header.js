import { useState } from "react";
import logo from "./assets/images/logo.jpg";
import { Link } from "react-router-dom";
 
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
                </ul>
            </div>
            {/* <h2>Header component</h2> */}
            { isLogIn ? 
            <button onClick={e => setLoginUser(false)}>LogOut</button>:
            <button onClick={e => setLoginUser(true)}>LogIn</button>
            }
        </div>
    )
}

export default Header;