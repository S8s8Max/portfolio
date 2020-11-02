import React from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import style from "../css/components/News.css";

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
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
                <Paper variant="outlined" elevation={3}/>
            </div>
        );
    };
}
export default News;
