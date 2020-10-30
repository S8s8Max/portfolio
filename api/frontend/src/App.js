import React, { Component } from "react";
import News from "./components/News";
import axios from "axios";

class App extends Component {
  state = {
    picture: []
  };

  componentDidMount() {
    this.getPicture();
  }


  getPicture() {
    axios
      .get("http://localhost:8000/api/picture")
      .then(res => {
        this.setState({ picture: res.data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="main-screen">
        <News />
        <div id="picture">
        {this.state.picture.map(item => (
          <div>
          <h3>{item.title}</h3>
          <img src={item.picture} alt="" width="300"/>
          </div>
        ))}
        </div>
      </div>
    )
  }
}

export default App;
