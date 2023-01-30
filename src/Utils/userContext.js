import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"twinkle Puri",
        email:"abc@gmail.com"
    }
})

export default UserContext;