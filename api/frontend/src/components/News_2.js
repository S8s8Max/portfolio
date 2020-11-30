import React, { useState, useEffect, setState } from 'react';
import {getNews} from "./GetNewsContent";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

import CloseIcon from '@material-ui/icons/Close';
import MoreIcon from "@material-ui/icons/MoreHoriz";

export default function News() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const news = useState(getNews);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  return (
    <div>
      <React.Fragment>
        <Grid container direction="column" justify="center" alignItems="center" spacing={2}>

          <Grid item>
              </Grid>
              <Grid item>
                <Container maxWidth="md" style={{paddingTop:20, paddingBottom:20}}>
                  <div className="newsContent" >
                    <Grid container justify="center" spacing={4}>
                      {news.map(item => (
                        <React.Fragment>
                        <Grid item xs={12} sm={6} md={4}>
                          <Card className="hs" elevation={8} style={{ height: "100%", display: 'flex', flexDirection: 'column',}}>
                            <CardActionArea >
                              <CardMedia
                                component="img"
                                alt="thumb_nail"
                                height="170"
                                image={item.thumb_nail}
                                title="thumbnail"
                                onClick={handleClickOpen('paper')}
                              />
                              </CardActionArea>

                              <CardContent style={{flexGrow:1,}}>
                                <Typography gutterBottom variant="h5" component="h2">
                                  {item.title}
                                </Typography>
                                <Typography component="h4">
                                  {item.label}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  {item.content}
                                </Typography>
                              </CardContent>
                          </Card>
                        </Grid>

                        <Dialog
                        open={open}
                        onClose={handleClose}
                        scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                        >
                          <DialogTitle id="scroll-dialog-title">{item.title}</DialogTitle>
                            <DialogContent dividers={scroll === 'paper'}>
                              <Card>
                                <CardMedia
                                 component="img"
                                 alt="thumb_nail"
                                 image={item.thumb_nail}
                                />
                              </Card>
                              <DialogContentText
                                id="scroll-dialog-description"
                                tabIndex={-1}
                              >
                              {item.content}
                              </DialogContentText>
                            </DialogContent>
                          <DialogActions>
                          <Button onClick={handleClose} color="primary">
                            <CloseIcon/>
                          </Button>
                        </DialogActions>
                        </Dialog>
                      </React.Fragment>
                    ))}
                  </Grid>
                  </div>
                </Container>
              </Grid>

            </Grid>
      </React.Fragment>
    </div>
  );
}
