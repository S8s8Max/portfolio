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
                        <Grid container direction="row" spacing={10} >
                            <Grid item>
                                <Card style={{width:300, height:400, marginTop:"45%"}}>
                                    <Grid container>
                                        <Grid item>
                                            <Avatar
                                                variant="rounded"
                                                src="../static/image/avatar.png"
                                                style={{width:180, height:180, marginTop:"15%", marginLeft:"33%", marginRight:"32%"}}
                                            />
                                        </Grid>
                                        <Grid item >
                                            <Typography style={{marginLeft:30, marginTop:20}}>
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
                                                    Skill : Python, Django, C/C++, MySQL, PHP, CakePHP, React, Machine Learning,...
                                                </Typography>
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
