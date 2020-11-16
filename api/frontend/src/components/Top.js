import React from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";

import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Top extends React.Component {
    checked = true;
    render () {
        return (
                <div style={{textAlign:"center",justifyContent:"center"}}>
                    <Typography
                        style={{
                            color:"whitesmoke",
                            fontFamily:"Nova Mono",
                            fontSize:"3rem",
                            paddingTop:"40vh"
                            }}>
                        Welcome To <br/> Sober Wizard's Lab
                    </Typography>
                    <IconButton
                    style={{
                        color:"whitesmoke",
                    }}>
                        <ExpandMoreIcon fontSize="large"/>
                    </IconButton>
                </div>
        );
    }
}
export default Top;
// <img src="https://source.unsplash.com/random" alt="top image" width="auto" height="600"/>
