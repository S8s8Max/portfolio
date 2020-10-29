import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    news: [],
    picture: []
  };

  componentDidMount() {
    this.getNews();
    this.getPicture();
  }


  getNews() {
    axios
      .get("http://localhost:8000/api/news", {
        withCredentials: true
      })
      .then(res => {
          this.setState({ news: res.data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  getPicture() {
    axios
      .get("http://localhost:8000/api/picture", {
        withCredentials: true
      })
      .then(res => {
        this.setState({ picture: res.data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div id="news">
        {this.state.news.map(item => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>-{item.label}</p>
            <br/>
            <p>{item.content}</p>
          </div>
        ))}
        </div>
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
