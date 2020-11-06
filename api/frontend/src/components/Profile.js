import React from "react";
import "../css/components/Profile.css";
import ProfileContent from "./ProfileContent";

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
                        <ProfileContent/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default Profile;
