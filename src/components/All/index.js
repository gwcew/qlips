import React from 'react';
import {makeStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import SidebarRight from 'components/SidebarRight';
import VideoPage from 'pages/VideoPage';
import Page404 from 'pages/404Page';
import { Grid, Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    content: {
        backgroundColor: theme.palette.background.default,
        marginTop: '75px',
        paddingTop: '25px',
      },
      rounded: {
        position: 'fixed',
        pointerEvents: 'none',
        top: '75px',
        boxShadow: `0 0 0px 20px ${theme.palette.subbackground.main}`,
        minHeight: 'calc(100vh - 75px)',
        borderRadius: '2.5% 2.5% 0 0',
        borderColor: `${theme.palette.border.main}`,
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
        [theme.breakpoints.up('sm')]: {
            width: 'calc(100% - 265px)',
            margin: 'auto',
            marginLeft: '165px',
        },
        [theme.breakpoints.down('sm')]: {
            width: 'calc(100% - 150px)',
            margin: 'auto',
            marginLeft: '128px',     
        },
      },
}));

export default function MainPage({isCollapsedSidebar, isLightTheme, setCollapsedSidebar, setTheme}) {
    const classes = useStyles();

    return         <div>
    <Header />
    <Grid container className={classes.content}>
      <Switch>
        <Route exact path="/">
          <Grid item className={isCollapsedSidebar ? classes.inner : classes.collapsed}>
            <HomePage />
          </Grid>
        </Route>
        <Route exact path="/video/:id" render={(props) => (
          <VideoPage {...props} className={classes.fullWidth}/>
        )}>
        </Route>
        <Route exact path="/playlists" component={Page404}>
          <Grid item className={isCollapsedSidebar ? classes.inner : classes.collapsed}>
            <Page404/>
          </Grid>
        </Route>
        <Route exact path="/categories">
          <Grid item className={isCollapsedSidebar ? classes.inner : classes.collapsed}>
            <Page404/>
          </Grid>
        </Route>
        <Route exact path="/curses">
          <Grid item className={isCollapsedSidebar ? classes.inner : classes.collapsed}>
            <Page404/>
          </Grid>
        </Route>
      </Switch>
    </Grid>
    <Sidebar collapsed={isCollapsedSidebar} setCollapsed={setCollapsedSidebar} setTheme={setTheme} isLightTheme={isLightTheme} />
    <Hidden smDown>
      <SidebarRight />
    </Hidden>

    <Grid container className={classes.rounded}/>
    </div>
}

MainPage.propTypes = {
    isCollapsedSidebar: PropTypes.bool,
    isLightTheme: PropTypes.bool,
    setCollapsedSidebar: PropTypes.func,
    setTheme: PropTypes.func,
};