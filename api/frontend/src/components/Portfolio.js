import React from "react";

import Header from "./Header";
import Top from "./Top";
import Profile from "./Profile";
import News from "./News";
import News2 from "./News2";
import Picture from "./Picture";
import Product from "./Product";
import Footer from "./Footer";

import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";

class Portfolio extends React.Component {
    render () {
        return (
        <div className="portfolio" style={{backgroundColor:"rgb(20, 20, 40)"}}>
            <div
                style={{
                    background:"linear-gradient(to bottom, rgba(20,20,40,1), rgba(20,20,40,0)), url(https://source.unsplash.com/user/S8s8Max/likes/1600x900)",
                    minHeight:"100vh",
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",}}>
                <Header />
                <Top/>
            </div>
            <div id="contentStart" style={{padding:40}}>
                <Grid container direction="column" spacing={10} justify="center">
                    <Grid item>
                        <Profile/>
                    </Grid>
                    <Divider variant="inset" light />
                    <Grid item>
                        <News/>
                    </Grid>
                    <Grid item>
                        <Picture/>
                    </Grid>
                    <Grid item>
                        <Product/>
                    </Grid>

                </Grid>
            </div>
            <Footer/>
        </div>
        );
    }
}
export default Portfolio;
