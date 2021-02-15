import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';
import VideoBanner from './VideoBanner';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {},
}));

function VideoPage({videoData}) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2} direction="row">
      <Grid item xs={12}>
        <ReactPlayer url={videoData.url_video} controls width="100%" height="auto" />
      </Grid>
      <Grid item xs={12}>
        <VideoBanner videoData={videoData} />
      </Grid>
    </Grid>
  );
}

VideoPage.propTypes = {
  videoData: PropTypes.object,
};

export default VideoPage;
