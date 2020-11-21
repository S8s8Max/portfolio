import React from "react";
import axios from "axios";
import NewsDetailModal from "./NewsDetailModal";

import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

import ShareIcon from "@material-ui/icons/Share";

import MenuBookIcon from '@material-ui/icons/MenuBook';


class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
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
            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>

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

                                <CardActions style={{position:"relative"}}>
                                    <Button size="small" color="primary" variant="text">
                                        <ShareIcon/>
                                    </Button>
                                    <Button size="small" color="primary" variant="text" >
                                        <NewsDetailModal />
                                    </Button>
                                </CardActions>
                        </Card>
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
