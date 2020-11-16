import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Grid from "@material-ui/core/Grid";

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
                <Link to="/">
                  <IconButton edge="start" className="titlelogo" variant="text" style={{color:"whitesmoke"}}>
                      <HomeIcon/>
                  </IconButton>
                </Link>

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
                        <MenuIcon/>
                      </IconButton>
                      <Menu {...bindMenu(popupState)} >
                        <MenuItem onClick={popupState.close}>Profile</MenuItem>
                        <MenuItem onClick={popupState.close}>News</MenuItem>
                        <MenuItem onClick={popupState.close}>Works</MenuItem>
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
