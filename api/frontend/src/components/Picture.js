import React from "react";
import axios from "axios";

import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';

import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";

import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import InfoIcon from '@material-ui/icons/Info';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import CssBaseline from "@material-ui/core/CssBaseline";

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
            <div id="Picture">
                <Grid container direction="column" justify="center" alignItems="center" spacing={3}>

                    <Grid item>
                        <Typography
                            variant="h4"
                            style={{color:"whitesmoke"}}
                        >
                            <CameraAltIcon fontSize="large"/>
                        </Typography>
                    </Grid>

                    <Grid item>
                        <div
                            style={{
                                display:"flex",
                                flexWrap:"wrap",
                                justifyContent:"space-around",
                                overflow:"hidden",
                                background:"none"}}>
                            <GridList
                                cols={2.8}
                                spacing={15}
                                style={{
                                    flexWrap:"nowrap",
                                    transform:"translateZ(0)"
                                }}>
                                <CssBaseline/>
                            {this.state.picture.map(item => (
                              <GridListTile style={{height:"auto"}}>
                                <Card>
                                    <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={item.picture}
                                        backgroundRepeat="no-repeat"
                                        backgroundSize="cover"
                                        style={{
                                            height:400
                                        }}
                                    />
                                    </CardActionArea>

                                    <GridListTileBar
                                    title={item.title}
                                    actionIcon={
                                        <IconButton aria-label={`star ${item.title}`} style={{color:"whitesmoke"}}>
                                        <InfoIcon/>
                                        </IconButton>
                                    }
                                    style={{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"}}
                                    />
                                </Card>
                              </GridListTile>
                            ))}
                            </GridList>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default Picture;
