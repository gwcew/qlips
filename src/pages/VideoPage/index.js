import React from 'react';
import { Grid, Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from 'components/VideoPlayer';
import { FormatListNumbered, Info } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {},
  sideBlock: {
    backgroundColor: theme.palette.subbackground.main,
    borderRadius: '10px',
    height: '70vh',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  leftBlock: {
    textAlign: 'right',
  },
  rightBlock: {
    textAlign: 'left',
  },
  mainBlock: {
    backgroundColor: theme.palette.background.default,
  },
}));

function VideoPage({videoID}) {
  const classes = useStyles();
 
  return (
    <Container>
      <Grid container className={classes.root} spacing={4}>
        <Grid item xs={2} className={[classes.sideBlock, classes.leftBlock]}>
          <Box justifyContent="center" flexDirection="row-reverse">
            <FormatListNumbered style={{ color: '#fff' }} fontSize="large" />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <VideoPlayer />
        </Grid>
        <Grid item xs={2} className={[classes.sideBlock, classes.rightBlock]}>
          <Box justifyContent="center">
            <Info style={{ color: '#fff' }} fontSize="large" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default VideoPage;
