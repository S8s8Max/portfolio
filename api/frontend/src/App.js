import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    news: []
  };
  
  componentDidMount() {
    this.getNews();
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

  render() {
    return (
      <div>
        {this.state.news.map(item => (
          <div>
            <h2>「{item.title}」</h2>
            <p>   -{item.label}</p>
            <br/>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default App;
