import React from "react";
//import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import {HashLink} from "react-router-hash-link";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import PersonIcon from '@material-ui/icons/Person';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import HomeIcon from '@material-ui/icons/Home';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isDisplayed: false,
        };
        this.handleMouseHover = this.handleMouseHover.bind(this);
    }
    handleMouseHover() {
      this.setState({
          isDisplayed: !this.state.isDisplayed,
      })
    }

    render () {
        return (
          <AppBar
            position="sticky"
            style={{background:"linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)",}}
            elevation={0}>
            <Toolbar>

                <HashLink smooth to="#">
                  <IconButton
                    edge="start"
                    variant="text"
                    style={{color:"whitesmoke"}}>
                      <HomeIcon/>
                  </IconButton>
                </HashLink>


                <div className="adjuster" style={{flexGrow:1}}></div>
                    <React.Fragment>
                      <IconButton
                        edge="start"
                        className="menulogo"
                        variant="text"
                        style={{color:"whitesmoke"}}>
                          <HashLink smooth to="#contentStart">
                            <IconButton style={{color:"whitesmoke"}}>
                              <PersonIcon/>
                            </IconButton>
                          </HashLink>

                          <HashLink smooth to="#News">
                            <IconButton style={{color:"whitesmoke"}}>
                              <MenuBookIcon/>
                            </IconButton>
                          </HashLink>

                          <HashLink smooth to="#Picture">
                            <IconButton style={{color:"whitesmoke"}}>
                              <CameraAltIcon/>
                            </IconButton>
                          </HashLink>

                          <HashLink smooth to="#Product">
                            <IconButton style={{color:"whitesmoke"}}>
                              <FitnessCenterIcon/>
                            </IconButton>
                          </HashLink>
                        </IconButton>
                    </React.Fragment>
            </Toolbar>
          </AppBar>
        );
    }
}
export default Header;
