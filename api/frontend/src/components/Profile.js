import React from "react";
import "../css/components/Profile.css";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';

import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


class Profile extends React.Component {
    render () {
        return (
            <div className="profile">
                <Typography variant="h2" style={{color:"whitesmoke", alignContent:"center"}}>
                    PROFILE
                </Typography>

                <Grid container justify="center">
                <Card elevation={8} style={{height:500, width:800, }}>
                    <CardContent className="profile-content" style={{flex:"1 0 auto", display:"flex", flexDirection:"column"}}>
                        <Typography variant="h5" component="cite">
                            "Do not go gentle into that good night."
                            - Dylan Marlais Thomas(1914 - 53)
                        </Typography>
                        <Typography varient="body" component="p">
                            I am Kippei Watanabe. I'm a student of Osaka City University.
                            This is my portfolio site which is made by Django + React.
                        </Typography>
                    </CardContent>
                    <CardMedia
                        className="profile-media"
                        image="https://source.unsplash.com/random"
                        title="Profile Image"
                        style={{height:150, width:150}}
                    />
                </Card>
                </Grid>
            </div>
        );
    }
}
export default Profile;
