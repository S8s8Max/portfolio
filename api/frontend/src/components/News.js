import React from "react";
import axios from "axios";

class News extends React.Component {
    state = {
        news: []
    }

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

    render () {
        return (
            <div className="news">
                {this.state.news.map(item => (
                    <div key={item.id}>
                        <img src={item.thumb_nail} alt="thumb_nail" width="200"/>
                        <h2>{item.title}</h2>
                        <p>[{item.label}]</p>
                        <br/>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        );
    };
}
export default News;
