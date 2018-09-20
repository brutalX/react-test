import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/WelcomeGreeting";
class App extends Component {
  render() {
    // const elementxd = React.createElement(
    //   "h1",
    //   { className: "greeting" },
    //   "Hello World!xd"
    // );
    this.state = {
      value: true
    };
    const user = {
      firstName: "andy",
      lastName: "boiii"
    };
    const handleName = user => {
      const { firstName, lastName } = user;
      return " My Name is " + firstName + " " + lastName;
    };
    const handleClick = () => {};

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {handleName(user)}!</h1>
          <Welcome name={user.lastName} />
          <Welcome name={handleName(user)} />
          <Welcome name="Sarah" />
        </header>
        <p className="App-intro">{/* <elementxd /> */}</p>
      </div>
    );
  }
}

export default App;
