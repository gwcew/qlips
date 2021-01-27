import React from 'react';
import { Grid, Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from 'components/VideoPlayer';
import { FormatListNumbered, Info } from '@material-ui/icons';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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

function VideoPage(props) {
  const classes = useStyles();

  const videoData = props.videocontent.content[props.match.params.id - 1];
  
  return (
    <Grid item className={props.className}>
      <Container>
      <Grid container className={classes.root} spacing={4}>
        <Grid item xs={2} className={[classes.sideBlock, classes.leftBlock]}>
          <Box justifyContent="center" flexDirection="row-reverse">
            <FormatListNumbered style={{ color: '#fff' }} fontSize="large" />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <VideoPlayer videoData={videoData} />
        </Grid>
        <Grid item xs={2} className={[classes.sideBlock, classes.rightBlock]}>
          <Box justifyContent="center">
            <Info style={{ color: '#fff' }} fontSize="large" />
          </Box>
        </Grid>
      </Grid>
    </Container>
    </Grid>
  );
}

VideoPage.propTypes = {
  className: PropTypes.object,
  videocontent: PropTypes.object,
  match: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    videocontent: state.gridvideo,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);
