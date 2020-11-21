import React from "react";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
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
                        <div style={{
                            display:"flex",
                            flexWrap:"wrap",
                            justifyContent:"space-around",
                            overflow:"hidden",
                            background:"none"
                        }}>
                        <GridList
                            cols={2.8}
                            spacing={15}
                            style={{
                                flexWrap:"nowrap",
                                transform:"translateZ(0)"
                            }}>
                            {this.state.product.map(item => (
                                <GridListTile style={{height:"auto"}}>
                                    <Card>
                                        <CardActionArea>
                                            <GridListTileBar
                                                title={item.title}
                                                subtitle={item.sub_title}
                                                style={{
                                                    height:100,
                                                    background:"linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
                                                }}
                                            />
                                            <CardMedia
                                                component="img"
                                                alt="thumb_nail"
                                                image={item.thumb_nail}
                                                title="thumbnail"
                                                style={{
                                                    height:400
                                                }}
                                            />
                                        </CardActionArea>
                                    </Card>
                                </GridListTile>
                            ))}
                        </GridList>
                        </div>
                    </Grid>

                </Grid>
            </React.Fragment>
        );
    }
}
export default Product;
