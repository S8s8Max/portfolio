import React from "react";
import  Link  from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Kippei Watnabe
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
}));

export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <footer className={classes.footer}>
            <CssBaseline/>
                <Typography variant="h6" align="center" gutterBottom>
                    Sober Wizard's Lab
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Thank you for your checking!
                </Typography>
                <Copyright />
            </footer>
        </React.Fragment>
    );
  }
