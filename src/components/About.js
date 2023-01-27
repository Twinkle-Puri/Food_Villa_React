import { Component } from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";

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
        {/* <Outlet/> */}
        <Profile data={this.state.data} />
      </>
    );
  }
}
export default About;
