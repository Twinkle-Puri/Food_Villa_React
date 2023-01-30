import { useContext } from "react";
import userContext from "../Utils/userContext";

const Footer = () => {
    const {user} = useContext(userContext);
    return <><h5>This side is develope by {user.name} -  {user.email}</h5></>
}

export default Footer;