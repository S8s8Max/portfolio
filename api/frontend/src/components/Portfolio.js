import React from "react";
import Header from "./Header";
import Top from "./Top";
import Profile from "./Profile";
import Works from "./Works";
import Footer from "./Footer";
import "../css/components/Portfolio.css";
import News from "./News";

class Portfolio extends React.Component {
    render () {
        return (
        <div className="portfolio">
            <Header/>
            <Top/>
            <Profile/>
            <News/>
            <Works/>
            <Footer/>
        </div>
        );
    }
}
export default Portfolio;
