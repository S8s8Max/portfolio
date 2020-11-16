import React from "react";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Button from "@material-ui/core/Button";
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
        };
    }

    componentDidMount() {
        this.getProduct();
    }

    getProduct() {
        axios
          .get("http://localhost:8000/api/product")
          .then(res => {
            this.setState({ product: res.data});
          })
          .catch(err => {
            console.log(err);
          });
    }
    render () {
        return (
            <React.Fragment>
                <Grid container direction="column" justify="center" alignItems="center" spacing={3}>

                    <Grid item>
                        <Typography
                            variant="h4"
                            style={{color:"whitesmoke", textAlign:"center", }}
                        >
                            <FitnessCenterIcon fontSize="large"/>
                        </Typography>
                    </Grid>

                    <Grid item>
                        {this.state.product.map(item => (
                            <Card
                                className="product"
                                style={{width:400, minHeight:"50vh", background:"rgba(0,0,0,0.5)",}}
                                elevation={8}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="thumb_nail"
                                        minHeight="30%"
                                        image={item.thumb_nail}
                                        title="thumbnail"
                                    />


                                <Typography variant="h5" style={{color:"whitesmoke", textAlign:"center", paddingTop:20}}>
                                    {item.title}
                                </Typography>
                                <Typography variant="dody2" style={{color:"whitesmoke", textAlign:"center",}}>
                                    <TextsmsOutlinedIcon/>
                                    {item.sub_title}
                                </Typography>

                                </CardActionArea>
                            </Card>
                        ))}
                    </Grid>

                </Grid>
            </React.Fragment>
        );
    }
}
export default Product;
