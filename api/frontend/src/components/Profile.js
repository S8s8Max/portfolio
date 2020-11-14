import React from "react";
import ProfileAgeTable2 from "./ProfileAgeTable2";
import ProfileIntro from "./ProfileIntro";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class Profile extends React.Component {
    render () {
        return (
            <div className="profile">
                <Grid container direction="column" spacing={3} justify="center" alignItems="center">
                    <Grid item>
                        <Typography variant="h2" style={{color:"whitesmoke"}}>
                            PROFILE
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Grid container direction="column" spacing={5} alignItems="center">
                            <Grid item>
                                <ProfileIntro/>
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
