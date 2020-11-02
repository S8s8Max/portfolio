import React from "react";
import axios from "axios";
import style from "../css/components/Picture.css";

class Picture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: [],
        };
    }

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

    render () {
        return (
            <div className="picture">
                {this.state.picture.map(item => (
                <div>
                    <h3>{item.title}</h3>
                    <img src={item.picture} alt="" width="300"/>
                </div>
                ))}
            </div>
        );
    }
}
export default Picture;
