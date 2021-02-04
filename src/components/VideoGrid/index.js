import React, {useEffect} from 'react';
import { Grid } from '@material-ui/core';
import VideoBlick from './VideoBlock';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setAccessType, setSearchContentByString} from '../../redux/actions';
import PropTypes from 'prop-types';
import {ACCESS_TYPE_DEFAULT} from 'components/LoginForm/AccessTypes'
import Placeholder from './Placeholder';
import {useLocation} from 'react-router-dom';

function VideoGrid({videocontent, handleAccessType, handleSearchString, isLightTheme}) {
  let accessType = localStorage.getItem('accessType');

  if (accessType === undefined || accessType === null) {
    accessType = ACCESS_TYPE_DEFAULT;
  }

  const location = useLocation();
//  useEffect(() => handleAccessType(accessType), [])

  useEffect(() => {
    handleAccessType(accessType);
    const params = new URLSearchParams(location.search);
    const queryResult = params.get('search');

    handleSearchString(queryResult);
  }, []);

  const handleGeneratingItems = () => {
    if (videocontent.searchOutput.length === 0 
      && videocontent.searchStatus.length === 0) {
      return videocontent.content.map((element, index) => 
      element.accessType <= Number(videocontent.accessType) 
      ? <VideoBlick key={index} width={3} videoData={element}/>
      : null);
    }

    if (videocontent.searchOutput.length !== 0) {
      return videocontent.searchOutput.map((element, index) => <VideoBlick key={index} width={3} videoData={element}/>);
    }

    if (videocontent.searchString) {
      if (videocontent.searchOutput.length === 0 && videocontent.searchString.length !== 0) {
        return <Placeholder isLightTheme={isLightTheme}></Placeholder>;
      }
    }

    return videocontent.content.map((element, index) => 
    element.accessType <= Number(videocontent.accessType) 
    ? <VideoBlick key={index} width={3} videoData={element}/>
    : null);
  };

  return (
    <Grid container spacing={2}>
      {handleGeneratingItems()}
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
    handleAccessType: setAccessType,
    handleSearchString: setSearchContentByString,
  }, dispatch);
}

VideoGrid.propTypes = {
  videocontent: PropTypes.object,
  handleAccessType: PropTypes.func,
  handleSearchString: PropTypes.func,
  isLightTheme: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoGrid);
