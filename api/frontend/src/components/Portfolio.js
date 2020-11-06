import React from "react";

import Header from "./Header";
import Top from "./Top";
import Profile from "./Profile";
import News from "./News";
import Works from "./Works";
import Footer from "./Footer";
import "../css/components/Portfolio.css";

import Grid from "@material-ui/core/Grid";

class Portfolio extends React.Component {
    render () {
        return (
        <div className="portfolio">
            <Header/>
            <Grid container direction="column" spacing={10} justify="center">

                <Grid item>

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
            <Footer/>
        </div>
        );
    }
}
export default Portfolio;
