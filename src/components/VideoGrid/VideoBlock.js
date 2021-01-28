import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import image from '../../data/previews/CO_2020.png'
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
    minWidth: '200px',
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
    color: theme.palette.text.main,
  },
  channelName: {
    padding: '0',
    margin: '0',
    fontSize: '12px',
    color: theme.palette.subtext.main,
  },
  avatar: {
    width: '25px!important',
    height: '25px!important',
  },
}));

function VideoBlock({ width = 3, videoData }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className={classes.root}>
      <Link to={"/video/" + videoData.id}>
      <img src={videoData.url_preview} alt="preview" className={classes.previewImg} />
        <Grid container className={classes.captionWrap} spacing={1}>
          <Grid item>
            <div className={classes.avatarWrap}>
              <Avatar
                alt="channel avatar"
                className={classes.avatar}
              />
            </div>
            <div className={classes.videoCaption}>
              <span>{videoData.title}</span>
              <p className={classes.channelName}>{videoData.author}</p>
            </div>
          </Grid>
        </Grid>
      </Link>
    </Grid>
  );
}

VideoBlock.propTypes = {
  width: PropTypes.number,
  videoData: PropTypes.object
};

export default VideoBlock;
