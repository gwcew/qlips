import React from 'react';
import { Avatar, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  videoName: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
    color: theme.palette.text.main,
  },
  channelName: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1),
    color: theme.palette.subtext.main,
  },
}));

function VideoBanner() {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item>
        <Avatar
          alt="channel avatar"
          className={classes.avatar}
        />
      </Grid>
      <Grid item>
        <h2 className={classes.videoName}>Медицинская генетика</h2>
        <p className={classes.channelName}>Sons Of Medicine</p>
        <Button
          variant="contained"
          color="primary"
          size="small"
        >
          Подписаться
        </Button>
      </Grid>
    </Grid>
  );
}

export default VideoBanner;
