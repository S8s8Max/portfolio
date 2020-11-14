import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from "@material-ui/core/colors/purple";
import orange from "@material-ui/core/colors/orange";

const theme = createMuiTheme({
  palette: {
    primary: {
      //light: "#8561c5",
      main: purple[500],
      //dark: "#482880",
    },
    secondary: {
      //light: "#ff784e",
      main: orange[500],
      //dark: "#b23c17",
    },
  },
  typography: {
      button: {
          textTransform: "none"
      }
  }
});

const useStyles = makeStyles({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  ageTableContents: {
    color: "whitesmoke",
  },
  ageTableTitle: {
      color: "secondary",
  }

});

export default function ProfileAgeTable() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Timeline align="alternate">

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="secondary">
                1998 June 16
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={classes.ageTableContents}>
                <Typography>
                    Born in Shimane
                </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="secondary">
                2017 Mar.
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={classes.ageTableContents}>
            <Typography>
                Graduate Matsue South H.S.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="secondary">
                2017 Apr.
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={classes.ageTableContents}>
            <Typography>
                Enterd the Faculty of Economics, Osaka City University
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="secondary">
                2019 Sept.
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={classes.ageTableContents}>
            <Typography>
                Went to Seattle for studying abroad.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="secondary">
                2020 Apr.
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={classes.ageTableContents}>
            <Typography >
                Went back from Seattle.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="secondary">
                2020 July.
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={classes.ageTableContents}>
            <Typography>
                Got a first job as a programmer.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="secondary">
                2020 Oct.
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={classes.ageTableContents}>
            <Typography>
                Started finding a full-time job as a programmer.
            </Typography>
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </React.Fragment>
  );
}
