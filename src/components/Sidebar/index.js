import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Paper } from '@material-ui/core';
import {
  Dehaze,
  NightsStay,
  FilterNone,
  FormatListBulleted,
  School,
  Home,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';



const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100%',
    width: '150px',
    overflow: 'hidden',
    '& button':{
      borderColor: theme.palette.border.main,
    },
  },
  collapsed: {
    width: '75px',
  },
  menuBlock: {
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
    borderRadius: '0 8px 8px 0',
    borderColor: theme.palette.border.main,
    borderWidth: '1px',
    borderStyle: 'solid',
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
    color: '#CDD3',
  },
  icon: {
    color: theme.palette.border.main,
  },
  paper: {
    backgroundColor: theme.palette.background.default,
  },
}));

function Sidebar({ collapsed, setCollapsed, setTheme, isLightTheme }) {
  const classes = useStyles();
  const history = useHistory();

  const onClickChangeTheme = () => {
      if (isLightTheme === "true") {
        setTheme("false");
        localStorage.setItem('theme', 'false');
      }
      else {
        setTheme("true");
        localStorage.setItem('theme', 'true');
      }
  };

  return (
    <Grid className={collapsed ? [classes.root, classes.collapsed] : classes.root} container>
      <Grid item xs="12" className={[classes.menuBlock, classes.menuBlockMain]}>
        <Button
          fullWidth
          className={classes.menuButton}
          color="primary"
          size="small"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Dehaze />
        </Button>
        <Button
          fullWidth
          className={classes.menuButton}
          variant="outlined"
          size="small"
          onClick={() => history.push('/')}
        >
            <Home className={classes.icon}/>
          {!collapsed && 'Главная'}
        </Button>
        <Button
          fullWidth
          className={classes.menuButton}
          variant="outlined"
          size="small"
          onClick={() => history.push('/playlists')}
        >
            <FilterNone className={classes.icon} />
          {!collapsed && 'Плейлисты'}
        </Button>
        <Button
          fullWidth
          className={classes.menuButton}
          variant="outlined"
          size="small"
          onClick={() => history.push('/categories')}
        >
            <FormatListBulleted className={classes.icon} />
          {!collapsed && 'Категории'}
        </Button>
        <Button
          fullWidth
          className={classes.menuButton}
          variant="outlined"
          size="small"
          onClick={() => history.push('/curses')}
        >
            <School className={classes.icon} />
          {!collapsed && 'Курсы'}
        </Button>
      </Grid>
      <Grid item xs="12" className={[classes.menuBlock, classes.menuBlockSecondary]}>
        <Button
          fullWidth
          className={classes.menuButton}
          variant="outlined"
          size="small"
          onClick={onClickChangeTheme}
        >
            <NightsStay className={classes.icon} />
          {!collapsed && 'Тема'}
        </Button>
      </Grid>
    </Grid>
  );
}

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
  setTheme: PropTypes.func,
  isLightTheme: PropTypes.bool
};

export default Sidebar;
