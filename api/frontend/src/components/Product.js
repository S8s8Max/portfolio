import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";
import InfoIcon from "@material-ui/icons/Info";


class Product extends React.Component {
    render () {
        return (
            <div className="product">
                <Grid container direction="column" justify="center" alignItems="center" spacing={3}>

                    <Grid item>
                        <Typography
                            variant="h4"
                            style={{color:"whitesmoke", textAlign:"center", }}
                        >
                            - Product
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Card
                            className="product"
                            style={{width:400, height:400}}
                            elevation={8}
                        >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="thumb_nail"
                                        height="300"
                                        image="https://source.unsplash.com/random"
                                        title="thumbnail"
                                    />
                                    <Typography variant="h5" style={{color:"black", textAlign:"center"}}>
                                        "Product Here."
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

                </Grid>
            </div>
        );
    }
}
export default Product;
