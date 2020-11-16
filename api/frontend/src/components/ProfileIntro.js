import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import avatar from "../static/image/avatar.png";

import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from '@material-ui/core/Hidden';
import Chip from '@material-ui/core/Chip';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";

import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
      },
      chip: {
        margin: theme.spacing(0.5),
      },
    card: {
      display: 'flex',
      width: 700,
      height: 360,
    },
    cardDetails: {
        width: "45%",
    },
    cardMedia: {
      width: "55%",
    },
    social: {
        color: "primary",
    }
  }));

export default function ProfileIntro() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Python' },
    { key: 1, label: 'C++' },
    { key: 2, label: 'Django' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Machine Learning' },
  ]);

  return (
        <Card className={classes.card}>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={avatar} title="imageTitle" />
          </Hidden>
          <div className={classes.cardDetails}>
            <CardContent>

            <Grid container direction="column" justify="center" alignItems="center" spacing={3}>

                <Grid item style={{paddingTop:50}}>
                    <Typography component="h1" variant="h8">
                        Kippei Watanabe
                    </Typography>
                </Grid>

                {/*
                <Grid item xs={6}>
                    <Typography variant="subtitle1" color="textSecondary">
                        School
                    </Typography>
                    <Typography component="h2" variant="h8">
                        Osaka City University, Faculty of Economics
                    </Typography>
                </Grid>
                */}

                <Grid item >
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Typography variant="subtitle1" color="textSecondary">
                            <CheckIcon/>
                        </Typography>
                        <Grid item className={classes.root}>
                            {chipData.map((data) => {
                                let icon;
                                return (
                                <li key={data.key}>
                                    <Chip
                                    icon={icon}
                                    label={data.label}
                                    className={classes.chip}
                                    />
                                </li>
                                );
                            })}
                            {/*
                            <Chip variant="outlined" label="Python" color="primary" size="small"/>
                            <Chip variant="outlined" label="C++" color="primary" size="small"/>
                            <Chip variant="outlined" label="Django" color="primary" size="small"/>
                            <Chip variant="outlined" label="React" color="primary" size="small"/>
                            <Chip variant="outlined" label="Machine Learning" color="secondary" size="small"/>
                            */}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item align="center">
                    <IconButton className={classes.social} href="https://github.com/S8s8Max">
                        <GitHubIcon/>
                    </IconButton>
                    <IconButton className={classes.social} href="https://instagram.com/s8s8max">
                        <InstagramIcon/>
                    </IconButton>
                    <IconButton className={classes.social} href="https://twitter.com/S8s8Max">
                        <TwitterIcon/>
                    </IconButton>
                </Grid>
            </Grid>

            </CardContent>
          </div>
        </Card>
  );
}

