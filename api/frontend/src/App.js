import React, { Component } from "react";
import News from "./components/News";
import Picture from "./components/Picture";
import Blog from "./components/Blog";

class App extends Component {

  render() {
    return (
      <div className="main-screen">
        <Blog />
      </div>
    )
  }
}

export default App;
