import React from "react";
import Header from "./Header";
import Top from "./Top";
import Profile from "./Profile";
import Works from "./Works";
import Footer from "./Footer";

class Portfolio extends React.Component {
    render () {
        return (
        <div className="portfolio">
            <Header/>
            <Top/>
            <Profile/>
            <Works/>
            <Footer/>
        </div>
        );
    }
}
export default Portfolio;
