import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import  "../css/components/Header.css";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render () {
        return (
            <AppBar position="static">
            <Toolbar>
              <Link to="/">
                <Button className="titlelogo" variant="text">
                    <HomeIcon/>
                </Button>
              </Link>

              <PopupState variant="popover" popupId="popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button className="menulogo" variant="text" {...bindTrigger(popupState)}>
                      <MenuIcon/>
                    </Button>
                    <Menu {...bindMenu(popupState)}>
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
