import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import img404LightDesktop from 'pages/404Page/images/light_desktop.png';
import img404DarkDesktop from 'pages/404Page/images/dark_desktop.png';
import img404LightMobile from 'pages/404Page/images/light_mobile.png';
import img404DarkMobile from 'pages/404Page/images/dark_mobile.png';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    textAlign: 'center',
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '50%',
    },
  },
}));
 
function Page404({themeStatus}) {
  const classes = useStyles();

  const matchesQueryStringResultForDesktopImage = useMediaQuery('(min-width: 501px)');
  const matchesQueryStringResultForMobileImage = useMediaQuery('(max-width: 500px)');

  let currentImage = null;

  if (matchesQueryStringResultForDesktopImage) {
    if (themeStatus === "true" || themeStatus === null) {
      currentImage = img404LightDesktop;
    }
    else {
      currentImage = img404DarkDesktop;
    }
  }
  else if (matchesQueryStringResultForMobileImage) {
    if (themeStatus === "true" || themeStatus === null) {
      currentImage = img404LightMobile;
    }
    else {
      currentImage = img404DarkMobile;
    }
  }
  
  return (
    <Grid className={classes.root}>
      <img className={classes.image} src={currentImage} alt="404"></img>
    </Grid>
  );
}

function mapStateToProps(state) {
  return {
    themeStatus: state.window.themeStatus,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

Page404.propTypes = {
  isLightTheme: PropTypes.bool,
  themeStatus: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page404);
