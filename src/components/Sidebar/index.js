import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Button, ToggleButtonGroup, ToggleButton, Grid, Paper } from '@material-ui/core';
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
import {setThemeStatus, setSideBarStatus, setSideBarSelectedPageID} from 'redux/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const SIDEBAR_MAIN_PAGE_ID = 1;
const SIDEBAR_PLAYLISTS_PAGE_ID = 2;
const SIDEBAR_CATEGORY_PAGE_ID = 3;
const SIDEBAR_CURSES_PAGE_ID = 4;

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

    "&.MuiButtonBase-root": {
      borderRadius: '10px',
      color: theme.palette.text.main,
      backgroundColor: theme.palette.sidebar.buttonBackgroundColor,
    },
  },
  icon: {
    color: theme.palette.border.main,
    backgroundColor: theme.palette.sidebar.iconBackgroundColor,
    border: `1px solid ${theme.palette.border.main}`,
    borderRadius: '6px',
    width: '32px',
    height: '32px',
  },
  paper: {
    backgroundColor: theme.palette.background.default,
  },
  unselectedIcon: {
    color: theme.palette.border.main,
    backgroundColor: theme.palette.sidebar.iconUnSelectedBackgroundColor,
    width: '32px',
    height: '32px',
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
  grid: {
    paddingTop: '10px',
  },
  gridItemIcon: {
    margin: '2px',
  },
  gridItemText: {
    marginTop: '5px',
  },
  selected: {},
  hover: {},
}));

function Sidebar({ collapsed, setCollapsed, setTheme, isLightTheme,
   handleSetThemeStatus, handleSideBarStatus, isSideBarCollapsed,
   sidebarPageID, handleSideBarSelectedPageID }) {
  const classes = useStyles();
  const history = useHistory();

  const localCollapsed = localStorage.getItem('SideBarCollapsed');
  const localSelectedPageID = localStorage.getItem('SelectedPageID');

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

  const [alignment, setAlignment] = useState(!(!!localSelectedPageID) ? sidebarPageID : Number(localSelectedPageID));
  
  console.log(localSelectedPageID);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment === 0) {
      return;
    }

    setAlignment(newAlignment);
    handleSideBarSelectedPageID(newAlignment);
    localStorage.setItem('SelectedPageID', newAlignment);
  };

  const handleOnClickMainPageButton = () => {
    history.push('/');
  };

  const handleOnClickPlaylistsPageButton = () => {
    history.push('/playlists');
  };

  const handleOnClickCategoryPageButton = () => {
    history.push('/categories');
  };

  const handleOnClickCursesPageButton = () => {
    history.push('/curses');
  };

  return (
    <Grid className={!isSideBarCollapsed ? [classes.root, classes.collapsed].join(' ') : classes.root} container>
      <Grid item xs={12} className={[classes.menuBlock, classes.menuBlockMain].join(' ')}>
        <ToggleButtonGroup
        value={alignment}
        exclusive
        orientation="vertical"
        onChange={handleAlignment}
        >
          <ToggleButton 
          value={0} 
          classes={{root: classes.togglebuttonmenu, selected: classes.selected}} 
          disableRipple
          onClick={handleOnClickMenuButton}>
            <Grid container>
              <Grid item xs={12}>
                {!isSideBarCollapsed ? <Dehaze></Dehaze> : <Close></Close>}
              </Grid>
            </Grid>
          </ToggleButton>

          <ToggleButton 
          value={SIDEBAR_MAIN_PAGE_ID} 
          classes={{root: classes.togglebutton, selected: classes.selected}} 
          disableRipple
          onClick={handleOnClickMainPageButton}>
            <Grid container className={classes.grid}>
              <Grid item className={classes.gridItemIcon}>
                <Home className={alignment === SIDEBAR_MAIN_PAGE_ID ? classes.icon : classes.unselectedIcon}/>
              </Grid>
              {
                !isSideBarCollapsed ? null :
                <Grid item className={classes.gridItemText}>
                  {isSideBarCollapsed && "Главная"}
                </Grid>
              }
            </Grid>
          </ToggleButton>

          <ToggleButton 
          value={SIDEBAR_PLAYLISTS_PAGE_ID} 
          classes={{root: classes.togglebutton, selected: classes.selected}} 
          disableRipple
          onClick={handleOnClickPlaylistsPageButton}>
            <Grid container className={classes.grid}>
              <Grid item className={classes.gridItemIcon}>
                <FilterNone className={alignment === SIDEBAR_PLAYLISTS_PAGE_ID ? classes.icon : classes.unselectedIcon} />
              </Grid>
              {
                !isSideBarCollapsed ? null : 
                <Grid item className={classes.gridItemText}>
                  {isSideBarCollapsed && "Плейлисты"}
                </Grid>
              }

            </Grid>
          </ToggleButton>

          <ToggleButton 
          value={SIDEBAR_CATEGORY_PAGE_ID} 
          classes={{root: classes.togglebutton, selected: classes.selected}} 
          disableRipple
          onClick={handleOnClickCategoryPageButton}>
            <Grid container className={classes.grid}>
              <Grid item className={classes.gridItemIcon}>
                <FormatListBulleted className={alignment === SIDEBAR_CATEGORY_PAGE_ID ? classes.icon : classes.unselectedIcon} />
              </Grid>

              {
                !isSideBarCollapsed ? null : 
                <Grid item className={classes.gridItemText}>
                  {isSideBarCollapsed && "Категории"}
                </Grid>
              }

            </Grid>
          </ToggleButton>

          <ToggleButton 
          value={SIDEBAR_CURSES_PAGE_ID} 
          classes={{root: classes.togglebutton, selected: classes.selected}} 
          disableRipple
          onClick={handleOnClickCursesPageButton}>
            <Grid container className={classes.grid}>
              <Grid item className={classes.gridItemIcon}>
                <School className={alignment === SIDEBAR_CURSES_PAGE_ID ? classes.icon : classes.unselectedIcon} />
              </Grid>
              {
                !isSideBarCollapsed ? null : 
                <Grid item className={classes.gridItemText}>
                  {isSideBarCollapsed && "Курсы"}
                </Grid>
              }
            </Grid>
          </ToggleButton>

        </ToggleButtonGroup>
      </Grid>
      <Grid item xs={12} className={[classes.menuBlock, classes.menuBlockSecondary].join(' ')}>
      <ToggleButtonGroup
        exclusive
        orientation="vertical"
        >

          <ToggleButton 
          classes={{root: classes.togglebutton, selected: classes.selected}} 
          disableRipple
          onClick={onClickChangeTheme}>
            <Grid container className={classes.grid}>
              <Grid item className={classes.gridItemIcon}>
                <NightsStay className={classes.unselectedIcon}/>
              </Grid>
              {
                !isSideBarCollapsed ? null :
                <Grid item className={classes.gridItemText}>
                  {isSideBarCollapsed && "Тема"}
                </Grid>
              }
            </Grid>
          </ToggleButton>

        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
}

function mapStateToProps(state) {
  return {
    isSideBarCollapsed: state.window.sideBarCollapsed,
    sidebarPageID: state.window.sidebarPageID,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleSetThemeStatus: setThemeStatus,
    handleSideBarStatus: setSideBarStatus,
    handleSideBarSelectedPageID: setSideBarSelectedPageID,
  }, dispatch);
}

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
  isSideBarCollapsed: PropTypes.bool,
  sidebarPageID: PropTypes.number,
  handleSideBarStatus: PropTypes.func,
  handleSideBarSelectedPageID: PropTypes.func,
  handleSetThemeStatus: PropTypes.func,
  setCollapsed: PropTypes.func,
  setTheme: PropTypes.func,
  isLightTheme: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
