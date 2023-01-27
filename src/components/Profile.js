import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      counts: 0,
      userInfo: {
        Name: "",
        location: "",
      },
    };
  }

  async componentDidMount() {
    console.warn("componentDidMount");

  this.timer =  setInterval( ()=> {console.log("helo")},2000);
    const response = await fetch("https://api.github.com/users/Twinkle-Puri");
    const data = await response.json();
    this.setState({ userInfo: data });
    console.warn(data, "datta");
  }
  componentDidUpdate(prevProps,prevState){
    if(this.state.count !== prevState.count || this.state.count !== prevState.count){
        //code
    }
    console.warn('component did update')
  }
componentWillUnmount(){
    clearInterval(this.timer)
    console.warn("Will mount")
}
  render() {
    const { count } = this.state;
    console.warn(this.state.userInfo,"user")
    //don't mutates the states directly
    return (
      <div>
        <h1>Hi my name is - {this.state.userInfo.login}</h1>
        <img src={this.state.userInfo.avatar_url} height="100px" width="100px"/>
        <h5>location: {this.state.userInfo.location}</h5>
        {/* <h5>Count - {count}</h5>
        <h5>Count - {this.state.counts}</h5>
        <button
          onClick={() =>
            this.setState({ count: count + 1, counts: this.state.counts + 1 })
          }
        >
          Count
        </button> */}
      </div>
    );
  }
}

export default Profile;
