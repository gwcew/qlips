import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import SidebarRight from 'components/SidebarRight';
import VideoPage from 'pages/VideoPage';
import Page404 from 'pages/404Page';
import { Grid, Hidden } from '@material-ui/core';
import { createMuiTheme, makeStyles, withStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import {connect} from 'react-redux';

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#4B6EE2',
    },
    secondary: {
      main: '#9978DC',
    },
    background: {
      default: '#ffffff',
    },
    subbackground: {
      main: '#e1e1e1',   
    },
    border: {
      main: '#8fa7e8',
    },
    text: {
      main: '#364095',
    },
    subtext: {
      main: '#626a96',
    },
    caption: {
      main: '#515151',
    },
    logintext: {
      main: '#b3abbd',
      background: '#f0f0f0',
    },
    comment: {
      hoverColor: '#e9edfd',
      backgroundColor: '#fff',
      subbackgroundColor: '#e1e1e1',
      authorNameColor: '#9978DC',
      contentNameColor: '#364095',
      secondaryColor: '#626a97',
      optionsColor: '#626a97',
      avatarColor: 'black',
      rightPanelInputBackgroundColor: '#f5f5f5',
    },
    sidebar: {
      backgroundColor: '#f5f5f5',
    },
    searchbar: {
      backgroundColor: '#ffffff',
      inputbackgroundColor: '#f0f0f0',
    },
    loginform: {
      buttonbackgroundColor: '#8e8e8e',
    },
  },
});

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#2e70f3',
    },
    secondary: {
      main: '#27c1c1',
    },
    background: {
      default: '#383838',
    },
    subbackground: {
      main: '#262626',
    },
    border: {
      main: '#778594',
    },
    text: {
      main: '#b4c1f6',
    },
    subtext: {
      main: '#848eb5'
    },
    caption: {
      main: '#5f5f5f',
    },
    comment: {
      hoverColor: '#383838',
      backgroundColor: '#262626',
      subbackgroundColor: '#313131',
      authorNameColor: 'white',
      contentNameColor: '#b4c1f6',
      secondaryColor: '#8994bf',
      optionsColor: '#c1defe',
      avatarColor: 'white',
      rightPanelInputBackgroundColor: '#383838',
    },
    sidebar: {
      backgroundColor: '#383838',
    },
    searchbar: {
      backgroundColor: '#262626',
      inputbackgroundColor: '#323232',
    },
    loginform: {
      buttonbackgroundColor: '#8e8e8e',
    }
  },
});

const useStyles = makeStyles(theme => ({
  content: {
    marginTop: '75px',
    paddingTop: '25px',
  },
  rounded: {
    position: 'fixed',
    pointerEvents: 'none',
    top: '75px',
    boxShadow: '0 0 0px 20px #fff',
    minHeight: 'calc(100vh - 75px)',
    borderRadius: '2.5% 2.5% 0 0',
    borderColor: '#637ee0',
    borderWidth: '1px',
    borderStyle: 'solid',
  },
  inner: {
    width: 'calc(100% - 190px)',
    margin: 'auto',
  },
  fullWidth: {
    width: '100%',
    margin: 'auto',
  },
  collapsed: {
    width: 'calc(100% - 265px)',
    margin: 'auto',
    marginLeft: '165px',
  },
}));

const useStylesDark = makeStyles(theme => ({
  content: {
    backgroundColor: '#383838',
    marginTop: '75px',
    paddingTop: '25px',
  },
  rounded: {
    position: 'fixed',
    pointerEvents: 'none',
    top: '75px',
    boxShadow: '0 0 0px 20px #262626',
    minHeight: 'calc(100vh - 75px)',
    borderRadius: '2.5% 2.5% 0 0',
    borderColor: '#778594',
    borderWidth: '1px',
    borderStyle: 'solid',
  },
  inner: {
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100% - 190px)',
      margin: 'auto',
    },

    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 105px)',
      marginLeft: 'auto',
      marginRight: '15px',
    },
  },
  fullWidth: {
    width: '100%',
    margin: 'auto',
  },
  collapsed: {
    width: 'calc(100% - 265px)',
    margin: 'auto',
    marginLeft: '165px',
  },
}));

function App() {

  const location = useLocation();
  const [crutchLocation, setCrutchLocation] = useState(false);
  const [collapsedSidebar, setCollapsedSidebar] = useState(true);

  // By default we use light theme, but user can change it at anytime!
  const requestedTheme = localStorage.getItem('theme');
  const [isLightTheme, setTheme] = useState(requestedTheme);

  useEffect(() => {
    if (crutchLocation) {
      window.location.reload(false);
    } else {
      setCrutchLocation(true);
    }
  }, [location]);
  
  const currentTheme = isLightTheme === "true" ? lightTheme : darkTheme;

  const classes = useStyles();
  const classesDark = useStylesDark();

  const currentClasses = isLightTheme === "true" ? classes : classesDark;

  return (
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <div>
        <Header />
        <Grid container className={currentClasses.content}>
          <Switch>
            <Route exact path="/">
              <Grid item className={collapsedSidebar ? currentClasses.inner : currentClasses.collapsed}>
                <HomePage />
              </Grid>
            </Route>
            <Route exact path="/video/:id" render={(props) => (
              <VideoPage {...props} className={classes.fullWidth}/>
            )}>
            </Route>
            <Route exact path="/playlists" component={Page404}>
              <Grid item className={collapsedSidebar ? currentClasses.inner : currentClasses.collapsed}>
                <Page404 />
              </Grid>
            </Route>
            <Route exact path="/categories">
              <Grid item className={collapsedSidebar ? currentClasses.inner : currentClasses.collapsed}>
                <Page404 />
              </Grid>
            </Route>
            <Route exact path="/curses">
              <Grid item className={collapsedSidebar ? currentClasses.inner : currentClasses.collapsed}>
                <Page404 />
              </Grid>
            </Route>
          </Switch>
        </Grid>
        <Sidebar collapsed={collapsedSidebar} setCollapsed={setCollapsedSidebar} setTheme={setTheme} isLightTheme={isLightTheme} />
        <Hidden smDown>
          <SidebarRight />
        </Hidden>

        <Grid container className={currentClasses.rounded}/>
        </div>
      </ThemeProvider>
  );
}

export default App;
