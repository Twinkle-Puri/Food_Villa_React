import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.error(err,"kkk")
    return <div>
        <h1>Oops!!<br/> Something went wrong</h1>
        <h3>{err.status+ ": " + err.statusText}</h3>
    </div>
}
export default Error;