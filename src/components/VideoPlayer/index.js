import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import videoSrc from 'data/video/demo1.mov';
import ReactPlayer from 'react-player';
import VideoBanner from './VideoBanner';

const useStyles = makeStyles(() => ({
  root: {},
}));

function VideoPage() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid>
        <ReactPlayer url={videoSrc} controls width="100%" height="auto" />
      </Grid>
      <VideoBanner />
    </Grid>
  );
}

export default VideoPage;
