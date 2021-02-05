import React from 'react';
import {
   Grid,
   ToggleButton,
   ToggleButtonGroup,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  NightsStay,
} from '@material-ui/icons';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setThemeStatus} from 'redux/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: '0',
    right: '0',
    height: '100%',
    width: '75px',
    overflow: 'hidden',
  },
  menuBlock: {
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.sidebar.backgroundColor,
    borderRadius: '0 0 0 0',
    border: `1px solid ${theme.palette.border.main}`,
    borderRight: '0px solid green',
    height: '100vh',
    paddingTop: '85px',
    paddingLeft: '20px',
  },
 
 
  unselectedIcon: {
    color: theme.palette.border.main,
    backgroundColor: theme.palette.sidebar.iconUnSelectedBackgroundColor,
    width: '26px',
    height: '26px',
    margin: '6px',
  },
 
  togglebutton: {
    "&.MuiButtonBase-root": {
      backgroundColor: theme.palette.sidebar.buttonBackgroundColor,
      marginBottom: '8px',
      color: theme.palette.text.main,
      textTransform: 'none',
      borderRadius: '10px',
      border: `1px solid ${theme.palette.border.main}`,
    },
    "&.MuiToggleButton-root": {
      backgroundColor: theme.palette.sidebar.buttonBackgroundColor,
      borderRadius: '10px',
      border: `1px solid ${theme.palette.border.main}`,

      '&:hover': {
        backgroundColor: 'transparent',
        borderRadius: '10px',
        border: `1px solid ${theme.palette.border.main}`,
      },
    },
    '&$selected': {
      backgroundColor: theme.palette.sidebar.buttonBackgroundColor,
      borderRadius: '10px',
      border: `1px solid ${theme.palette.border.main}`,
    },
  },

 
  togglebuttonmenu: {
    "&.MuiButtonBase-root": {
      backgroundColor: 'transparent',
      marginBottom: '8px',
      color: theme.palette.text.main,
      textTransform: 'none',
    },
    "&.MuiToggleButton-root": {
      backgroundColor: 'transparent',

      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    '&$selected': {
      backgroundColor: 'transparent',
    },

  },
 
 
  selected: {},
 
  buttonsWrapper: {
    width: '95%',
  },
}));

function SidebarRight({isLightTheme, handleSetThemeStatus, setTheme}) {
  const classes = useStyles();
  
  const matchesQueryStringResult = useMediaQuery('(max-height: 420px)');

  const onClickChangeTheme = () => {
    if (isLightTheme === "true") {
      handleSetThemeStatus("false");
      setTheme("false");
      localStorage.setItem('theme', 'false');
    }
    else {
      handleSetThemeStatus("true");
      setTheme("true");
      localStorage.setItem('theme', 'true');
    }
};

  return (
    <Grid className={classes.root} container>
      <Grid item xs={12} className={classes.menuBlock}>
        {matchesQueryStringResult ?
          <ToggleButtonGroup
            exclusive
            orientation="vertical"
          >
            <ToggleButton
              classes={{root: classes.togglebutton, selected: classes.selected}}
              disableRipple
              onClick={onClickChangeTheme}
            >
              <Grid container>
                <Grid item>
                  {isLightTheme === "true" ? <WbSunnyIcon className={classes.unselectedIcon}></WbSunnyIcon> : <NightsStay className={classes.unselectedIcon}/>}
                </Grid>
              </Grid>
            </ToggleButton>
          </ToggleButtonGroup>
        : null}

      </Grid>
    </Grid>
  );
}

SidebarRight.propTypes = {
  isLightTheme: PropTypes.string,
  handleSetThemeStatus: PropTypes.func,
  setTheme: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    isLightTheme: state.window.themeStatus,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleSetThemeStatus: setThemeStatus,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarRight);
