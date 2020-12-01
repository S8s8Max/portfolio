import React from "react";
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import {HashLink} from "react-router-hash-link";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import PersonIcon from '@material-ui/icons/Person';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render () {
        return (
          <AppBar
            position="relative"
            style={{background:"linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)",}}
            elevation={0}>
            <Toolbar>
              {/**
                <Link to="/">
                  <IconButton edge="start" className="titlelogo" variant="text" style={{color:"whitesmoke"}}>
                      <HomeIcon/>
                  </IconButton>
                </Link>
              */}

                <div className="adjuster" style={{flexGrow:1}}></div>

                <PopupState variant="popover" popupId="popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <IconButton
                        edge="start"
                        className="menulogo"
                        variant="text"
                        style={{color:"whitesmoke"}}
                        {...bindTrigger(popupState)}>
                        <DirectionsRunIcon/>
                      </IconButton>
                      <Menu {...bindMenu(popupState)} >
                        <HashLink smooth to="#contentStart">
                          <IconButton>
                            <PersonIcon/>
                          </IconButton>
                        </HashLink>
                        <HashLink smooth to="#News">
                          <IconButton>
                            <MenuBookIcon/>
                          </IconButton>
                        </HashLink>
                        <HashLink smooth to="#Picture">
                          <IconButton>
                            <CameraAltIcon/>
                          </IconButton>
                        </HashLink>
                        <HashLink smooth to="#Product">
                          <IconButton>
                            <FitnessCenterIcon/>
                          </IconButton>
                        </HashLink>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
            </Toolbar>
          </AppBar>
        );
    }
}
export default Header;
