import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import videoPreview from './previews/maxresdefault.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
  },
  previewImg: {
    width: '100%',
    borderRadius: '5px',
    boxShadow: '2px 2px 5px #A0A0A0',
  },
  captionWrap: {
    marginTop: theme.spacing(0.25),
  },
  avatarWrap: {
    width: '25px',
    display: 'inline-block',
    verticalAlign: 'top',
    marginTop: '5px',
  },
  videoCaption: {
    width: 'calc(100% - 30px)',
    fontSize: '14px',
    marginLeft: '5px',
    display: 'inline-block',
  },
  channelName: {
    padding: '0',
    margin: '0',
    fontSize: '12px',
  },
  avatar: {
    width: '25px!important',
    height: '25px!important',
  },
}));

function VideoBlock({ width = 3 }) {
  const classes = useStyles();

  return (
    <Grid item xs={width} className={classes.root}>
      <Link to="/video">
        <img src={videoPreview} alt="preview" className={classes.previewImg} />
        <Grid container xs={12} className={classes.captionWrap} spacing={1}>
          <Grid item>
            <div className={classes.avatarWrap}>
              <Avatar
                alt="channel avatar"
                className={classes.avatar}
              />
            </div>
            <div className={classes.videoCaption}>
              <span>Медицинская генетика</span>
              <p className={classes.channelName}>Sons Of Medicine</p>
            </div>
          </Grid>
        </Grid>
      </Link>
    </Grid>
  );
}

export default VideoBlock;
