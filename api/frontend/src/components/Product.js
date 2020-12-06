import React from "react";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from "@material-ui/core/Typography";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import CloseIcon from "@material-ui/icons/Close";
import Button from '@material-ui/core/Button';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            open: false,
            scroll: "paper",
            item: [],
            isDisplayed: false,
        };
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    handleMouseHover() {
        this.setState({
            isDisplayed: !this.state.isDisplayed,
        })
    }
    openModal(Item) {
        this.setState({
            open: true,
            item: Item,
        })
    }
    closeModal() {
        this.setState({
            open: false,
        })
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
            <div id="Product">
                <Grid container direction="column" justify="center" alignItems="center" spacing={3}>

                    <Grid item>
                        <Typography
                            variant="h4"
                            style={{color:"whitesmoke", textAlign:"center", }}
                        >
                            <div
                                onMouseEnter={this.handleMouseHover}
                                onMouseLeave={this.handleMouseHover}
                                style={{display:this.state.isDisplayed}}>
                                    <FitnessCenterIcon fontSize="large"/>
                            </div>
                            {
                                this.state.isDisplayed &&
                                <div>
                                  PRODUCT
                                </div>
                            }
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
                                                onClick={this.openModal.bind(this, item)}
                                                style={{
                                                    height:300
                                                }}
                                            />
                                        </CardActionArea>
                                    </Card>
                                    <Dialog
                                        open={this.state.open}
                                        onClose={this.closeModal}
                                        scroll={this.state.scroll}
                                        aria-labelledby="scroll-dialog-title"
                                        aria-describedby="scroll-dialog-description"
                                    >
                                        <DialogTitle id="scroll-dialog-title">{this.state.item.title}</DialogTitle>
                                        <DialogContent dividers={this.scroll === 'paper'}>

                                        <Grid container direction="row" spacing={4}>
                                            <Grid item>
                                            <Card style={{width:"100%"}}>
                                                <CardMedia
                                                component="img"
                                                alt="thumb_nail"
                                                image={this.state.item.thumb_nail}
                                                />
                                            </Card>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" component="h5">
                                                    {this.state.item.sub_title}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                            <DialogContentText
                                                id="scroll-dialog-description"
                                                tabIndex={-1}
                                            >
                                                {this.state.item.description}
                                            </DialogContentText>
                                            </Grid>
                                        </Grid>

                                        </DialogContent>
                                        <DialogActions>
                                        <Button onClick={this.closeModal} color="primary">
                                            <CloseIcon/>
                                        </Button>
                                        </DialogActions>
                                    </Dialog>
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
export default Product;
