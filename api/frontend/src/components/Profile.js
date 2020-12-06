import React from "react";
import ProfileAgeTable2 from "./ProfileAgeTable2";
import ProfileIntro from "./ProfileIntro";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PersonIcon from '@material-ui/icons/Person';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayed: false,
        }
        this.handleMouseHover = this.handleMouseHover.bind(this);
    }
    handleMouseHover() {
        this.setState({
            isDisplayed: !this.state.isDisplayed,
        })
    }
    render () {
        return (
            <div id="contentStart">
                <Grid container direction="column" spacing={3} justify="center" alignItems="center">
                    <Grid item>
                        <Typography
                            variant="h4"
                            style={{color:"whitesmoke", textAlign:"center"}}>
                        <div
                                onMouseEnter={this.handleMouseHover}
                                onMouseLeave={this.handleMouseHover}
                                style={{display:this.state.isDisplayed}}>
                                    <PersonIcon fontSize="large"/>
                            </div>
                            {
                                this.state.isDisplayed &&
                                <div>
                                  PROFILE
                                </div>
                            }
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Grid container direction="column" spacing={5} alignItems="center">
                            <Grid item>
                                <ProfileIntro />
                            </Grid>
                            <Grid item>
                                <ProfileAgeTable2/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default Profile;
