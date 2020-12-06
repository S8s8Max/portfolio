import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from "@material-ui/core/colors/orange";
import purple from "@material-ui/core/colors/purple";
import avatar from "../static/image/avatar.png";

import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from '@material-ui/core/Hidden';
import Chip from '@material-ui/core/Chip';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import CloseIcon from "@material-ui/icons/Close";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
//import TwitterIcon from '@material-ui/icons/Twitter';
import CheckIcon from '@material-ui/icons/Check';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: orange[500],
    }
  }
})
const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
        color: theme.palette.secondary.light,
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
        color: theme.palette.primary.light,
    }
  });

export default function ProfileIntro() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Python' },
    { key: 1, label: 'C/C++' },
    //{ key: 7, label: "Swift"},
    { key: 2, label: 'Django' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Machine Learning' },
    //{ key: 5, label: "cakePHP" },
    //{ key: 6, label: "MySQL" },
    //{ key: 7, label: "Docker" },
    //{ key: 8, label: "Linux"},
  ]);
  const [skills, setSkills] = React.useState([
    { key: 0, label: 'Python', desc: "First progrmming language i interacted with was Python at the programming class of school." },
    { key: 1, label: 'C/C++', desc: "I sometimes write C/C++ to attend programming contest to make it in time with the advantage of the quick calculation." },
    { key: 2, label: 'Django', desc: "This site uses Django for backend system such as API calling." },
    { key: 3, label: 'React', desc: "This site uses mainly React. It makes frontend developping easy. I especially like Material UI and use in this site." },
    { key: 4, label: 'Machine Learning', desc: "I've finished a Machine Learning course before and am interested in Data science. And now, I am researching about stock market with Machine Learning."},
    { key: 5, label: "cakePHP",desc: "I am currntly working at a Mailing company and the service i am dealing with is using cakePHP, so i had to learn it." },
    { key: 6, label: "MySQL", desc: "I have never used Database except MySQL and Elastic Search before." },
    { key: 7, label: "Docker" ,desc:"When i create an app or service, i try to work in a container to make them easy to be destributed"},
    { key: 8, label: "Linux", desc:"In detail, i use macOS terminal. Acctually, Linux and MacOS terminal differ a little bit, but i am studying both of them."},
    { key: 9, label: "Swift", desc:"To tell the truth, i don't finish a tutorial yet. But, now i am plannning what i will create by Swift."},
  ]);

  const openModal = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const closeModal = () => {
    setOpen(false);
  }
  return (
        <Card className={classes.card}>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={avatar} title="imageTitle" />
          </Hidden>
          <div className={classes.cardDetails}>
            <CardContent>

            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>

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

                <Grid item>
                  <Button onClick={openModal("paper")}>
                    SEE MORE
                  </Button>
                  <Dialog
                    open={open}
                    onClose={closeModal}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                  >
                    <DialogTitle id="scroll-dialog-title">Skills</DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>

                    <Grid container direction="row" spacing={4}>
                      <Grid item>
                        <DialogContentText
                          id="scroll-dialog-description"
                          tabIndex={-1}
                        >
                          {skills.map((item)=>{
                            return(
                              <React.Fragment>
                                <Chip
                                  label={item.label}
                                />
                                <ul><li>
                                <Typography>
                                  {item.desc}
                                </Typography>
                                </li></ul>
                              </React.Fragment>
                            );
                        })}
                        </DialogContentText>
                      </Grid>
                      </Grid>
                        </DialogContent>
                          <DialogActions>
                        <Button onClick={closeModal} color="primary">
                            <CloseIcon/>
                        </Button>
                      </DialogActions>
                  </Dialog>
                </Grid>

                <Grid item align="center">
                    <IconButton className={classes.social} href="https://github.com/S8s8Max">
                        <GitHubIcon/>
                    </IconButton>
                    <IconButton className={classes.social} href="https://instagram.com/s8s8max">
                        <InstagramIcon/>
                    </IconButton>
                    {/**
                    <IconButton className={classes.social} href="https://twitter.com/S8s8Max">
                        <TwitterIcon/>
                    </IconButton>
                    */}
                </Grid>
            </Grid>

            </CardContent>
          </div>
        </Card>
  );
}

