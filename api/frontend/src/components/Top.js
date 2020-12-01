import React from "react";
import {HashLink} from "react-router-hash-link";
import Typography from "@material-ui/core/Typography";

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
                            fontSize:"4rem",
                            paddingTop:"30vh"
                            }}>
                        Welcome To <br/> Sober Wizard's Lab
                    </Typography>

                    <HashLink smooth to="#contentStart">
                        <IconButton
                        style={{
                            color:"whitesmoke",
                        }}>
                            <ExpandMoreIcon fontSize="large"/>
                        </IconButton>
                    </HashLink>
                </div>
        );
    }
}
export default Top;
// <img src="https://source.unsplash.com/random" alt="top image" width="auto" height="600"/>
