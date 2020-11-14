import React from "react";
import axios from "axios";
import  "../css/components/Picture.css";

import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

import GetAppIcon from '@material-ui/icons/GetApp';
import InfoIcon from '@material-ui/icons/Info';

class Picture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: [],
        };
    }

    componentDidMount() {
        this.getPicture();
    }

    getPicture() {
        axios
          .get("http://localhost:8000/api/picture")
          .then(res => {
            this.setState({ picture: res.data});
          })
          .catch(err => {
            console.log(err);
          });
    }

    render () {
        return (
            <div className="picture">
                <Grid container direction="column" justify="center" alignItems="center" spacing={3}>

                    <Grid item>
                        <Typography
                            variant="h4"
                            style={{color:"whitesmoke", textAlign:"center", }}
                        >
                            - Picture
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Grid container justify="center" spacing={4}>
                        {this.state.picture.map(item => (

                        <Grid item>
                            <Card
                                className="picture"
                                style={{width:400, height:400}}
                                elevation={8}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="picture"
                                        height="300"
                                        image={item.picture}
                                        title="picture"
                                    />
                                    <Typography variant="h5" style={{color:"black", textAlign:"center"}}>
                                    "{item.title}"
                                    </Typography>
                                </CardActionArea>
                                <CardActions style={{alignItems:"center"}}>
                                    <Button size="small" color="primary" variant="text">
                                        <GetAppIcon/>
                                    </Button>
                                    <Button size="small" color="primary" variant="text">
                                        <InfoIcon/>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        ))}
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        );
    }
}
export default Picture;
