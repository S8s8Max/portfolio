import React, { Component } from "react";

const list = [
  {
    "label": "public",
    "title": "Started To Create Portfolio Site!!",
    "content": "I just started creating my portfolio site.\r\nIt will contain my profile and news about my creations including not only tech staffs but also photos and paintings.\r\nDon't miss it! See you soon!",
    "date": "2020-10-25",
    "thumb_nail": "http://localhost:8000/media/thumb_nails/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2020-10-25_14.10.23.png"
  }
]

class App extends Component {
  constructor (props) {
      super(props);
      this.state = { list };
  }

  render() {
      return (
          <div>
              {this.state.list.map(item => (
              <div>
                <h1>{item.title}</h1>
                <h3>{item.label}</h3>
                <p>Date: {item.date}</p>
                <p>content: {item.content}</p>
                <img src={item.thumb_nail} alt="thumb_nail"></img>
              </div>
              ))}
          </div>
      );
  }
}

export default App;
