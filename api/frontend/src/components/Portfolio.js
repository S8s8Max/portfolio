import React from "react";

import Header from "./Header";
import Top from "./Top";
import Profile from "./Profile";
import News from "./News";
import Works from "./Works";
import Footer from "./Footer";
import Grid from "@material-ui/core/Grid";

class Portfolio extends React.Component {
    render () {
        return (
        <div className="portfolio" style={{backgroundColor:"rgb(20, 20, 40)"}}>
            <Header/>
            <div style={{padding:40}}>
            <Grid container direction="column" spacing={10} justify="center">

                <Grid item >

                </Grid>
                <Grid item>
                    <Top/>
                </Grid>
                <Grid item>
                    <Profile/>
                </Grid>
                <Grid item>
                    <News/>
                </Grid>
                <Grid item>
                    <Works/>
                </Grid>
                <Grid item>

                </Grid>

            </Grid>
            </div>
            <Footer/>
        </div>
        );
    }
}
export default Portfolio;
