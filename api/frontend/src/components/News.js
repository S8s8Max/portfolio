import React from "react";
import axios from "axios";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

import CloseIcon from "@material-ui/icons/Close";
import MenuBookIcon from '@material-ui/icons/MenuBook';


class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            open: false,
            scroll: "paper",
            item: [],
            isDisplayed: false,
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleMouseHover = this.handleMouseHover.bind(this);
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
        this.getNews();
    }
    getNews() {
        axios
          .get("http://localhost:8000/api/news", {
            withCredentials: true
          })
          .then(res => {
              this.setState({ news: res.data});
          })
          .catch(err => {
            console.log(err);
          });
    }
    shortText(text, num) {
        var slicetext = text.length > num ? (text).slice(0,num)+"…" : text;
        return slicetext
    }

    render () {
        return (
            <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center" spacing={3}>

                <Grid item>
                    <Typography
                        variant="h2"
                        style={{color:"whitesmoke", textAlign:"center", }}
                    >
                        <div
                            onMouseEnter={this.handleMouseHover}
                            onMouseLeave={this.handleMouseHover}
                            style={{display:this.state.isDisplayed}}>
                            <MenuBookIcon fontSize="large"/>
                        </div>
                            {
                                this.state.isDisplayed &&
                                <div>
                                  NEWS
                                </div>
                            }
                    </Typography>
                </Grid>
                <Grid item>
                    <Container maxWidth="md" style={{paddingTop:20, paddingBottom:20}}>
                    <div className="newsContent" >
                    <Grid container justify="center" spacing={4}>
                    {this.state.news.map(item => (

                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            className="hs"
                            elevation={8}
                            style={{
                                height: "100%",
                                display: 'flex',
                                flexDirection: 'column',}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="thumb_nail"
                                    height="170"
                                    image={item.thumb_nail}
                                    title="thumbnail"
                                    onClick={this.openModal.bind(this, item)}
                                />
                            </CardActionArea>

                                <CardContent style={{flexGrow:1,}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {this.shortText(item.title, 15)}
                                    </Typography>
                                    <Typography component="h4">
                                        {item.label}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {this.shortText(item.content, 100)}
                                    </Typography>
                                </CardContent>
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

                            <Grid container direction="row" spacing={6}>
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
                                <Grid item>
                                    <Typography variant="subtitle1" component="h5">
                                        {this.state.item.label}
                                    </Typography>
                                </Grid>
                                <DialogContentText
                                    id="scroll-dialog-description"
                                    tabIndex={-1}
                                >
                                    {this.state.item.content}
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
                    </Grid>
                    ))}
                    </Grid>
                    </div>
                    </Container>
                </Grid>

            </Grid>

            </React.Fragment>
        );
    };
}
export default News;
