import React from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";

class Top extends React.Component {
    render () {
        return (
            <div className="top" style={{width:"100%", height:"100%",}}>
                <Typography variant="h1" style={{color:"whitesmoke", textAlign:"center"}}>
                    Sober Wizard's Lab
                </Typography>
            </div>
        );
    }
}
export default Top;
// <img src="https://source.unsplash.com/random" alt="top image" width="auto" height="600"/>
