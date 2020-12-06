import React from "react";
import axios from "axios";

import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";

import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import InfoIcon from '@material-ui/icons/Info';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import CloseIcon from "@material-ui/icons/Close";

import CssBaseline from "@material-ui/core/CssBaseline";

class Picture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: [],
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
        });
    }
    closeModal() {
        this.setState({
            open: false,
        })
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
                            style={{color:"whitesmoke",textAlign:"center"}}
                        >
                            <div
                                onMouseEnter={this.handleMouseHover}
                                onMouseLeave={this.handleMouseHover}
                                style={{display:this.state.isDisplayed}}>
                                <CameraAltIcon fontSize="large"/>
                            </div>
                                {
                                    this.state.isDisplayed &&
                                    <div>
                                      PICTURE
                                    </div>
                                }
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
                                        onClick={this.openModal.bind(this, item)}
                                        style={{
                                            height:400
                                        }}
                                    />
                                    </CardActionArea>

                                    <GridListTileBar
                                    title={item.title}
                                    actionIcon={
                                        <IconButton aria-label={`star ${item.title}`} style={{color:"whitesmoke"}}>
                                        {/**<InfoIcon/>*/}
                                        </IconButton>
                                    }
                                    style={{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"}}
                                    />
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
                                            image={this.state.item.picture}
                                            />
                                        </Card>
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
export default Picture;
