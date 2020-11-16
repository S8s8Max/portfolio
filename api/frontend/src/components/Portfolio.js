import React from "react";

import Header from "./Header";
import Top from "./Top";
import Profile from "./Profile";
import News from "./News";
import News2 from "./News2";
import Picture from "./Picture";
import Product from "./Product";
import Footer from "./Footer";
import Grid from "@material-ui/core/Grid";

class Portfolio extends React.Component {
    render () {
        return (
        <div className="portfolio" style={{backgroundColor:"rgb(20, 20, 40)"}}>
            <div
                style={{
                    backgroundImage:"url(https://source.unsplash.com/user/S8s8Max/likes/1600x900)",
                    minHeight:"100vh",
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    color:"linear-gradient(to top, rgba(20,20,40,0.7) 0%, rgba(20,20,40,0.3) 70%, rgba(20,20,40,0) 100%)"}}>
                <Header />
                <Top/>
                <div
                    style={{background:"linear-gradient(to top, rgba(20,20,40,1) 0%, rgba(20,20,40,0.3) 70%, rgba(20,20,40,0) 100%)"}}>
                </div>
            </div>
            <div style={{padding:40}}>
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
            </div>
            <Footer/>
        </div>
        );
    }
}
export default Portfolio;
