import React, {useEffect, useState, useLayoutEffect} from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import img404LightDesktop from 'pages/404Page/images/light_desktop.png';
import img404DarkDesktop from 'pages/404Page/images/dark_desktop.png';
import img404LightMobile from 'pages/404Page/images/light_mobile.png';
import img404DarkMobile from 'pages/404Page/images/dark_mobile.png';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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

  const [selectedImage, setImage] = useState();
  const [windowWidth, setWindowWidth] = useState(0);

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);

    const currentWidth = windowWidth;



    if (currentWidth >= 600) {
      if (themeStatus === "true") { 
        setImage(img404LightDesktop);
      }
      else {
        setImage(img404DarkDesktop);
      }
    }
    else {
      if (themeStatus === "true") {
        setImage(img404LightMobile);
      } 
      else {
        setImage(img404DarkMobile);
      }
    }

    return () => window.removeEventListener("resize", resizeWindow);
  }, []);


  const PickImage = (classes) => {
    if (windowWidth >= 500) {
      if (themeStatus === "true") { 
        return <img className={classes.image} src={img404LightDesktop} alt="404"></img>
      }
      else {
        return <img className={classes.image} src={img404DarkDesktop} alt="404"></img>
      }
    }
    else {
      if (themeStatus === "true") {
        return <img className={classes.image} src={img404LightMobile} alt="404"></img>
      } 
      else {
        return <img className={classes.image} src={img404DarkMobile} alt="404"></img>
      }
    }
  };

  return (
    <Grid className={classes.root}>
      {PickImage(classes)}
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
