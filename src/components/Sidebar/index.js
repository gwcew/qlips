import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Paper } from '@material-ui/core';
import {
  Dehaze,
  NightsStay,
  FilterNone,
  FormatListBulleted,
  School,
  Home,
  Close,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {setThemeStatus, setSideBarStatus} from 'redux/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100%',

    overflow: 'hidden',
    '& button':{
      borderColor: theme.palette.border.main,
    },

    [theme.breakpoints.up('sm')]: {
      width: '150px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '125px',
    },

  },
  collapsed: {
    width: '75px',
  },
  menuBlock: {
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.sidebar.backgroundColor,
    borderRadius: '0 8px 8px 0',
    border: `1px solid ${theme.palette.border.main}`,
    borderLeft: '0px solid green',
    textAlign: 'center',
    padding: theme.spacing(0.5),
  },
  menuBlockMain: {
    paddingTop: '100px',
  },
  menuBlockSecondary: {
    height: '100vh',
  },
  menuButton: {
    marginBottom: '8px!important',
    "&.MuiButtonBase-root": {
      borderRadius: '10px',
      color: theme.palette.text.main,
      backgroundColor: theme.palette.sidebar.buttonBackgroundColor,
      textTransform: 'none',
    },
  },
  icon: {
    color: theme.palette.border.main,
    backgroundColor: theme.palette.sidebar.iconBackgroundColor,
    border: `1px solid ${theme.palette.border.main}`,
    borderRadius: '6px',
  },
  paper: {
    backgroundColor: theme.palette.background.default,
  },
}));

function Sidebar({ collapsed, setCollapsed, setTheme, isLightTheme, handleSetThemeStatus, handleSideBarStatus, isSideBarCollapsed }) {
  const classes = useStyles();
  const history = useHistory();

  const localCollapsed = localStorage.getItem('SideBarCollapsed');

  const handleOnClickMenuButton = () => {
    if (localCollapsed === "true") {
      handleSideBarStatus(false);
      localStorage.setItem('SideBarCollapsed', "false");
    }
    else {
      handleSideBarStatus(true);
      localStorage.setItem('SideBarCollapsed', "true");
    }
  };

  useEffect(() => {
    handleSideBarStatus(localCollapsed === "true");
    handleSetThemeStatus(localStorage.getItem('theme'));
  });

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
    <Grid className={!isSideBarCollapsed ? [classes.root, classes.collapsed].join(' ') : classes.root} container>
      <Grid item xs={12} className={[classes.menuBlock, classes.menuBlockMain].join(' ')}>
        <Button
          fullWidth
          style={{backgroundColor: 'transparent'}}
          className={classes.menuButton}
          color="primary"
          size="small"
          onClick={handleOnClickMenuButton}
          disableRipple
        >
          {!isSideBarCollapsed ? <Dehaze /> : <Close></Close>}
        </Button>
        <Button
          fullWidth
          className={classes.menuButton}
          variant="outlined"
          size="small"
          onClick={() => history.push('/')}
        >
            <Home className={classes.icon}/>
          {isSideBarCollapsed && 'Главная'}
        </Button>
        <Button
          fullWidth
          className={classes.menuButton}
          variant="outlined"
          size="small"
          onClick={() => history.push('/playlists')}
        >
            <FilterNone className={classes.icon} />
          {isSideBarCollapsed && 'Плейлисты'}
        </Button>
        <Button
          fullWidth
          className={classes.menuButton}
          variant="outlined"
          size="small"
          onClick={() => history.push('/categories')}
        >
            <FormatListBulleted className={classes.icon} />
          {isSideBarCollapsed && 'Категории'}
        </Button>
        <Button
          fullWidth
          className={classes.menuButton}
          variant="outlined"
          size="small"
          onClick={() => history.push('/curses')}
        >
          <Grid container direction="row" spacing={2}>
            <Grid item>
            <School className={classes.icon} />
            </Grid>
            <Grid item>
            {isSideBarCollapsed && 'Курсы'}
            </Grid>
          </Grid>
        </Button>
      </Grid>
      <Grid item xs={12} className={[classes.menuBlock, classes.menuBlockSecondary].join(' ')}>
        <Button
          fullWidth
          className={classes.menuButton}
          variant="outlined"
          size="small"
          onClick={onClickChangeTheme}
        >
            <NightsStay className={classes.icon} />
          {isSideBarCollapsed && 'Тема'}
        </Button>
      </Grid>
    </Grid>
  );
}

function mapStateToProps(state) {
  return {
    isSideBarCollapsed: state.window.sideBarCollapsed,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleSetThemeStatus: setThemeStatus,
    handleSideBarStatus: setSideBarStatus,
  }, dispatch);
}

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
  setTheme: PropTypes.func,
  isLightTheme: PropTypes.string,
  handleSetThemeStatus: PropTypes.func,
  isSideBarCollapsed: PropTypes.bool,
  handleSideBarStatus: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
