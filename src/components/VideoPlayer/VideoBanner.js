import React from 'react';
import {
  Avatar,
  Button,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "flex-start",
    "& .MuiCardHeader-root": {
      padding: 0,
    }
  },
  videoName: {
    color: theme.palette.text.main,
    padding: 0,
  },
  channelName: {
    color: theme.palette.subtext.main,
  },
  header: {
    backgroundColor: 'transparent',
  },
}));

function VideoBanner({videoData}) {
  const classes = useStyles();


  return (
    <Grid container className={classes.root} direction="column" alignItems="center">
      <Grid item xs={6}>
        <Card style={{backgroundColor: 'transparent', boxShadow: 'none'}}>
          <CardHeader
            avatar={<Avatar
              alt="channel avatar"
              className={classes.avatar}
            />}
            title={videoData.title}
            subheader={<div className={classes.channelName}>{videoData.author}</div>}
            classes={{
              title: classes.videoName,
            }}
          >
          </CardHeader>
          <CardActions style={{paddingLeft: '55px'}}>
          <Button
          variant="contained"
          color="primary"
          size="small"
        >
          Подписаться
        </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

VideoBanner.propTypes = {
  videoData: PropTypes.object,
};

export default VideoBanner;
