import { Component } from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import userContext from "../Utils/userContext";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  render() {
    return (
      <>
        <h3>Its all about food page.</h3>
        <userContext.Consumer>
          {({user})=> <h4>{user.name}-{user.email}</h4>}
          </userContext.Consumer>
        {/* <Outlet/> */}
        <Profile data={this.state.data} />
      </>
    );
  }
}
export default About;
