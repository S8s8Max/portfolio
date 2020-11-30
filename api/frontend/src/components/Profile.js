import React from "react";
import ProfileAgeTable2 from "./ProfileAgeTable2";
import ProfileIntro from "./ProfileIntro";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PersonIcon from '@material-ui/icons/Person';

class Profile extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Grid container direction="column" spacing={3} justify="center" alignItems="center">
                    <Grid item>
                        <Typography variant="h2" style={{color:"whitesmoke"}}>
                            <PersonIcon fontSize="large"/>
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
            </React.Fragment>
        );
    }
}
export default Profile;
