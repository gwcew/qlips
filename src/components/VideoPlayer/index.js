import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import videoSrc from 'data/video/demo1.mov';
import ReactPlayer from 'react-player';
import VideoBanner from './VideoBanner';
import PropTypes from 'prop-types';


const useStyles = makeStyles(() => ({
  root: {},
}));

function VideoPage({videoData}) {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid>
        <ReactPlayer url={videoData.url_video} controls width="100%" height="auto" />
      </Grid>
      <VideoBanner videoData={videoData} />
    </Grid>
  );
}

VideoPage.propTypes = {
  videoData: PropTypes.object,
};

export default VideoPage;
