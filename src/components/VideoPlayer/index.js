import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import videoSrc from 'data/video/demo1.mov';
import ReactPlayer from 'react-player';
import VideoBanner from './VideoBanner';
import PropTypes from 'prop-types';
import Comments from './Comments';

const useStyles = makeStyles(() => ({
  root: {},
}));

function VideoPage({videoData}) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2} direction="row">
      <Grid item xs={6}>
        <ReactPlayer url={videoData.url_video} controls width="100%" height="auto" />
      </Grid>
      <Grid item xs={6}>
        <VideoBanner videoData={videoData} />
      </Grid>
      <Grid item xs={12}>
        <Comments></Comments>
      </Grid>
    </Grid>
  );
}

VideoPage.propTypes = {
  videoData: PropTypes.object,
};

export default VideoPage;
