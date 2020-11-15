import React from "react";
import axios from "axios";

import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from "@material-ui/core/Grid";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import ShareIcon from "@material-ui/icons/Share";
import MoreIcon from "@material-ui/icons/MoreHoriz";
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
                    <div
                        className="newsContent"
                        style={{
                            display:"flex",
                            flexWrap:"wrap",
                            justifyContent:"space-around",
                            overflow:"hidden",
                            background:"none"}}>
                    <GridList
                        style={{
                            flexWrap:"nowrap",
                            transform:"translateZ(0)",
                        }}
                        cols={4.5}
                        spacing={10}>

                    {this.state.news.map(item => (

                    <GridListTile style={{height: "auto"}}>
                        <Card elevation={8} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="thumb_nail"
                                    height="170"
                                    image={item.thumb_nail}
                                    title="thumbnail"
                                />
                            </CardActionArea>
                                <CardContent >
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
                                <Button size="small" color="primary" variant="text">
                                    <MoreIcon/>
                                </Button>
                            </CardActions>
                        </Card>
                    </GridListTile>
                    ))}
                    </GridList>
                    </div>
                </Grid>

            </Grid>
            </React.Fragment>
        );
    };
}
export default News;
