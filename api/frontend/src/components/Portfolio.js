import React from "react";

import Header from "./Header";
import Top from "./Top";
import Profile from "./Profile";
import News from "./News";
import Picture from "./Picture";
import Product from "./Product";
import Footer from "./Footer";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

class Portfolio extends React.Component {
    render () {
        return (
        <div className="portfolio" style={{backgroundColor:"rgb(20, 20, 40)"}}>
            <div
                style={{
                    background:"linear-gradient(to bottom, rgba(20,20,40,1), rgba(20,20,40,0)), url(https://source.unsplash.com/user/S8s8Max/likes/1600x900)",
                    minHeight:"120vh",
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",}}>
                <Header />
                <Top/>
            </div>
            <div style={{padding:40}}>
                <Container maxWidth="md">
                    <Grid container direction="column" spacing={10} justify="center">
                    <Grid item>
                        <Profile/>
                    </Grid>
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
                </Container>
            </div>
            <Footer/>
        </div>
        );
    }
}
export default Portfolio;
