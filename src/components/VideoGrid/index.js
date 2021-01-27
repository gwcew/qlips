import React, {useEffect} from 'react';
import { Grid } from '@material-ui/core';
import VideoBlick from './VideoBlock';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addVideo, deleteVideo, clickVideo} from '../../redux/actions';
import PropTypes from 'prop-types';

function VideoGrid(props) {
  return (
    <Grid container spacing={2}>
      {props.videocontent.content.map((element, index) => <VideoBlick key={index} width={3} videoData={element}/>)}
    </Grid>
  );
}

function mapStateToProps(state) {
  return {
    videocontent: state.gridvideo,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleAddVideo: addVideo,
    handleDeleteVideo: deleteVideo,
    handleClickVideo: clickVideo,
  }, dispatch);
}

VideoGrid.propTypes = {
  videocontent: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoGrid);
