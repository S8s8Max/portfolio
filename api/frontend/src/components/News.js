import React from "react";
import axios from "axios";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
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
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            open: !this.state.open,
        });
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



    render () {
        return (
            <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center" spacing={3}>

                <Grid item>
                    <Typography
                        variant="h2"
                        style={{color:"whitesmoke", textAlign:"center", }}
                    >
                        <MenuBookIcon fontSize="large"/>
                    </Typography>
                </Grid>
                <Grid item>
                    <Container maxWidth="md" style={{paddingTop:20, paddingBottom:20}}>
                    <div className="newsContent" >
                    <Grid container justify="center" spacing={4}>
                    {this.state.news.map(item => (

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="hs" elevation={8} style={{ height: "100%", display: 'flex', flexDirection: 'column',}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="thumb_nail"
                                    height="170"
                                    image={item.thumb_nail}
                                    title="thumbnail"
                                    onClick={this.handleClick}
                                />
                            </CardActionArea>

                                <CardContent style={{flexGrow:1,}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.title}
                                    </Typography>
                                    <Typography component="h4">
                                        {item.label}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.content}
                                    </Typography>
                                </CardContent>
                        </Card>
                            <Dialog
                                open={this.state.open}
                                onClose={this.handleClick}
                                scroll={this.state.scroll}
                                aria-labelledby="scroll-dialog-title"
                                aria-describedby="scroll-dialog-description"
                            >
                                <DialogTitle id="scroll-dialog-title">{item.title}</DialogTitle>
                                    <DialogContent dividers={this.scroll === 'paper'}>
                                    <Card>
                                        <CardMedia
                                        component="img"
                                        alt="thumb_nail"
                                        image={item.thumb_nail}
                                        />
                                    </Card>
                                    <DialogContentText
                                        id="scroll-dialog-description"
                                        tabIndex={-1}
                                    >
                                    {item.content}
                                    </DialogContentText>
                                    </DialogContent>
                                <DialogActions>
                                <Button onClick={this.handleClick} color="primary">
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
