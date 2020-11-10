import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import "../static/image/avatar.png";
import ProfileContent from "./ProfileContent";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";

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
                                <Card elevation={10} style={{width:600, height:300}}>
                                    <Grid container direction="row" justify="center" spacing={7}>
                                        <Grid item>
                                            <Avatar
                                                variant="rounded"
                                                src="https://source.unsplash.com/random"
                                                style={{width:180, height:180, marginTop:"15%"}}
                                            />
                                        </Grid>
                                        <Grid item >
                                                <Typography>
                                                    Name : 渡部吉平
                                                </Typography>
                                                <Typography>
                                                    Birth : 1998/06/16
                                                </Typography>
                                                <Typography>
                                                    School : 大阪市立大学経済学部
                                                </Typography>
                                                <Typography>
                                                    Skill : Python, Django,
                                                </Typography>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item>
                                <ProfileContent/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default Profile;
